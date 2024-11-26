const url='   '

async function vizualizarInformacoesGlobais() {

    const res = await fetch(url)
    const dados = await res.json()
    //console.log(dados)
    //alt z quebra a linha
    const pessoas_mundo = (dados.total_pessoas_mundo / 1e9)
    const trabalhadores_mundo = (dados.total_trabalhadores_mundo / 1e9)
    const transporte_para_trabalho = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 1e9)
    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho)
    const minutos = Math.round ((dados.tempo_medio_deslocamento_para_trabalho - horas) * 60)
    const percentual = ((transporte_para_trabalho/pessoas_mundo)*100).toFixed(2)


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que  do total de <span> ${pessoas_mundo} </span>  bilhões de pessoas no mundo,  
            <span> ${trabalhadores_mundo} </span> são trabalhadores e aproximadamente <span> ${transporte_para_trabalho} </span> necessitam de transporte
            para ir ao trabalho? <br> E o tempo médio gasto para o deslocamento ao trabalho
            é de menos de <span> ${horas}horas </span> e <span> ${minutos} minutos </span>. Esses trabalhadores que necessitam do transporte representam <span> ${percentual}</span> % do total das pessoas do mundo`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);

}
vizualizarInformacoesGlobais()