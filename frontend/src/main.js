import './style.css'

const API_URL = "https://clima-1g21.onrender.com"

const selectCidade = document.querySelector("#cidade")
const botaoBuscar = document.querySelector("#buscar")
const mensagem = document.querySelector("#mensagem")
const painelTempo = document.querySelector("#tempo")
const nomeCidade = document.querySelector("#nome-cidade")
const temperatura = document.querySelector("#temperatura")
const sensacao = document.querySelector("#sensacao")
const umidade = document.querySelector("#umidade")
const listaDicas = document.querySelector("#lista-dicas")
const listaPrevisao = document.querySelector("#lista-previsao")
const mensagemAlertas = document.querySelector("#mensagem-alertas")
const listaAlertas = document.querySelector("#lista-alertas")

botaoBuscar.addEventListener("click", carregarTempo)


async function carregarCidades() {
  try {
    const resposta = await fetch(`${API_URL}/cidades`)

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar cidades: ${resposta.status}`)
    }

    const cidades = await resposta.json()

    selectCidade.replaceChildren()

    cidades.forEach(cidade => {
      const opcao = new Option(cidade.nome, cidade.id)
      selectCidade.add(opcao)
    })

    selectCidade.value = "joao-pessoa"
    selectCidade.disabled = false
    botaoBuscar.disabled = false

    mensagem.textContent = `${cidades.length} cidades disponíveis`
  } catch (error) {
    console.error(error)
    mensagem.textContent = "Não foi possível carregar as cidades."
  }
}

async function carregarTempo() {
  botaoBuscar.disabled = true
  selectCidade.disabled = true
  painelTempo.hidden = true
  mensagem.textContent = "Consultando o tempo..."

  try {
    const cidade = encodeURIComponent(selectCidade.value)
    const resposta = await fetch(`${API_URL}/tempo?cidade=${cidade}`, {
      signal: AbortSignal.timeout(15000)
    })

    if (!resposta.ok) {
      throw new Error(`Erro ao consultar tempo: ${resposta.status}`)
    }

    const dados = await resposta.json()

    nomeCidade.textContent = dados.cidade
    temperatura.textContent = `${dados.temperatura} °C`
    sensacao.textContent = `${dados.sensacaoTermica} °C`
    umidade.textContent = `${dados.umidade}%`
    mostrarDicas(dados.dicas)
    mostrarPrevisao(dados.previsao)

    painelTempo.hidden = false
    mensagem.textContent = "Dados carregados."
  } catch (error) {
    console.error(error)
    mensagem.textContent = "Não foi possível consultar o tempo."
  } finally {
    botaoBuscar.disabled = false
    selectCidade.disabled = false
  }
}

function mostrarDicas(dicas) {
  listaDicas.replaceChildren()

  if (dicas.length === 0) {
    const item = document.createElement("li")
    item.textContent = "Nenhuma dica específica para esta consulta."
    listaDicas.append(item)
    return
  }

  dicas.forEach(dica => {
    const item = document.createElement("li")
    item.textContent = dica
    listaDicas.append(item)
  })



}

function mostrarPrevisao(previsao) {
  listaPrevisao.replaceChildren()

  previsao.forEach(dia => {
    const linha = document.createElement("tr")

    const valores = [
      dia.data.split("-").reverse().join("/"),
      `${dia.temperaturaMax} °C`,
      `${dia.temperaturaMin} °C`,
      `${dia.chanceChuva}%`
    ]

    valores.forEach(valor => {
      const coluna = document.createElement("td")
      coluna.textContent = valor
      linha.append(coluna)
    })

    listaPrevisao.append(linha)
  })
}
async function carregarAlertas() {
  try {
    const resposta = await fetch(`${API_URL}/alertas`, {
      signal: AbortSignal.timeout(15000)
    })

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar avisos: ${resposta.status}`)
    }

    const dados = await resposta.json()

    listaAlertas.replaceChildren()

    mensagemAlertas.textContent = dados.total === 0
      ? "Nenhum aviso vigente ou futuro encontrado para a Paraíba."
      : `${dados.total} avisos encontrados para a Paraíba.`

    dados.avisos.forEach(aviso => {
      const card = document.createElement("article")

      const titulo = document.createElement("h3")
      titulo.textContent = aviso.evento

      const severidade = document.createElement("p")
      severidade.textContent = `Severidade: ${aviso.severidade}`

      const areas = document.createElement("p")
      areas.textContent = aviso.regioesAfetadasPB?.length
        ? `Regiões da PB: ${aviso.regioesAfetadasPB.join(", ")}`
        : aviso.area

      const descricao = document.createElement("p")
      descricao.textContent = aviso.descricao

      const link = document.createElement("a")
      link.href = aviso.link
      link.textContent = "Ver aviso no INMET"
      link.target = "_blank"
      link.rel = "noopener noreferrer"

      card.append(titulo, severidade, areas, descricao, link)
      listaAlertas.append(card)
    })
  } catch (error) {
    console.error(error)
    mensagemAlertas.textContent = "Não foi possível carregar os avisos do INMET."
  }
}
carregarCidades()
carregarAlertas()