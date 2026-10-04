import express from "express";
import { DadosMeteorologicos } from "./types/meteorologia.js";
import { cidades } from "./data/cidades.js";
import { buscarAvisos } from "./services/alertas.services.js";
import cors from "cors"


const app = express()
const PORT = Number(process.env.PORT ?? 3400)

app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://clima-omega-three.vercel.app"
    ]
}))



app.get("/", (req, res) => {
    return res.send("servidor rodando")
})

app.get("/cidades", async (req, res) => {
    const listarCidades = cidades.map(cidade => ({
        id: cidade.id,
        nome: cidade.nome
    }))

    return res.json(listarCidades)
})

app.get("/tempo", async (req, res) => {
    const cidadeSolicitada = req.query.cidade ?? "joao-pessoa"
    const cidade = cidades.find(item => item.id === cidadeSolicitada)

    if (!cidade) {
        return res.status(400).json({
            mensagem: "Cidade não cadastrada"
        })
    }
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${cidade.latitude}&longitude=${cidade.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=7&timezone=auto`
        const resposta = await fetch(url, { signal: AbortSignal.timeout(10000) })
        if (!resposta.ok) {
    const detalhe = await resposta.text()

    console.error("Falha na Open-Meteo:", {
        status: resposta.status,
        detalhe,
        tentarNovamenteEm: resposta.headers.get("retry-after")
    })

    throw new Error(`Erro na API meteorológica: ${resposta.status}`)
        }

        const dados: DadosMeteorologicos = await resposta.json()
        const previsao = dados.daily.time.map((data: string, indice: number) => ({
            data: data,
            temperaturaMax: dados.daily.temperature_2m_max[indice],
            temperaturaMin: dados.daily.temperature_2m_min[indice],
            chanceChuva: dados.daily.precipitation_probability_max[indice]
        }))
        const dicas: string[] = []
        if (dados.current.temperature_2m >= 34) {
            dicas.push("Beba água regularmente ao longo do dia")
            dicas.push("Prefira locais fresco e atividades ao ar livre nos horários menos quentes.")
        }
        return res.json({
            cidade: cidade.nome,
            temperatura: dados.current.temperature_2m,
            sensacaoTermica: dados.current.apparent_temperature,
            umidade: dados.current.relative_humidity_2m,
            horario: dados.current.time,
            fusoHorario: dados.timezone,
            dicas: dicas,
            previsao: previsao
        })

    } catch (error) {
        console.error(error)
        return res.status(502).json({
            mensagem: "Não foi possível consultar o tempo"
        })

    }
})

app.get("/alertas", async (req, res) => {
    try {
        const avisos = await buscarAvisos()
        return res.json({
            estado: "PB",
            fonte: "INMET",
            total: avisos.length,
            avisos: avisos
        })

    } catch (error) {
        console.error(error)
        return res.status(502).json({
            mensagem: "Não foi possível consultar avisos da INMET"
        })
    }
})





app.listen(PORT, () => {
    console.log(`Servidor rodando na ${PORT}`)
})
