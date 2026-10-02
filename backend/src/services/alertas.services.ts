import { XMLParser } from "fast-xml-parser"
import { load } from "cheerio"


const regioesPB = [
    "Mata Paraibana",
    "Agreste Paraibano",
    "Borborema",
    "Sertão Paraibano"
]

function extrairCampos(html: string) {
    const $ = load(html)
    const campos: Record<string, string> = {}

    $("tr").each((indice, linha) => {
        const campo = $(linha).find("th").text().trim()
        const valor = $(linha).find("td").text().trim()

        campos[campo] = valor
    })

    return campos
}

function converteDataINMET(texto: string) {
    const iso = texto.trim().slice(0, 19).replace(" ", "T") + "Z"

    const instante = Date.parse(iso)

    if (Number.isNaN(instante)) {
        throw new Error(`Data inválida no aviso: ${texto}`)
    }


    return instante

}


export async function buscarAvisos() {

    const resposta = await fetch("https://apiprevmet3.inmet.gov.br/avisos/rss", {
        signal: AbortSignal.timeout(10000)
    })
    if (!resposta.ok) {
        throw new Error(`Erro no INMET: ${resposta.status}`)
    }
    const xml = await resposta.text()
    const parser = new XMLParser()
    const conteudo = parser.parse(xml)

    const canal = conteudo.rss?.channel

    if (!canal) {
        throw new Error("O INMET retornou uma estrutura RSS inesperada")
    }

    const itens = canal.item ?? []
    const lista = Array.isArray(itens) ? itens : [itens]

    const agora = Date.now()

    const avisos = lista.map((item: { title: string; description: string; link: string }) => {
        const campos = extrairCampos(item.description)
        if (!campos["Área"] || !campos["Início"] || !campos["Fim"]) {
            console.error("Aviso com campos incompletos:", {
                titulo: item.title,
                link: item.link,
                camposEncontrados: Object.keys(campos),
                area: campos["Área"],
                inicio: campos["Início"],
                fim: campos["Fim"]
            })
            throw new Error("Aviso do IMNET sem área ou validade")
        }

        const inicioMs = converteDataINMET(campos["Início"])
        const fimMs = converteDataINMET(campos["Fim"])

        if (fimMs < inicioMs) {
            throw new Error("Aviso com intervalo de validade inválido")
        }

        let situacao = "em_vigor"

        if (agora < inicioMs) {
            situacao = "futuro"
        } else if (agora >= fimMs) {
            situacao = "vencido"
        }


        return {
            titulo: item.title,
            status: campos["Status"],
            evento: campos["Evento"],
            severidade: campos["Severidade"],
            inicio: new Date(inicioMs).toISOString(),
            fim: new Date(fimMs).toISOString(),
            situacao: situacao,
            descricao: campos["Descrição"],
            area: campos["Área"],
            link: campos["Link Gráfico"] || item.link

        }
    })
    return avisos.filter(aviso => {
        const areas = aviso.area
            .replace("Aviso para as Áreas:", "")
            .split(",")
            .map(area => area.trim())

        return areas.some(area => regioesPB.includes(area)) &&
            aviso.situacao !== "vencido"
    })
}