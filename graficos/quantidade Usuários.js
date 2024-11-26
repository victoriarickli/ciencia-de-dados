async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json '
  const res = await fetch(url)
  const dados = await res.json()
  const pessoas_mundo = Object.keys(dados)
  const trabalhadores_mundo = Object.values(dados)

const data = [
  {
    x: pessoas_mundo,
    y: trabalhadores_mundo,
    type: 'bar'
  }
]

const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data)
}
quantidadeUsuarios()