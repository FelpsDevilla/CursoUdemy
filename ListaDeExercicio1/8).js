
function melhorPior(lista) {
    const pontuacaoJogos = (lista).split(" ")
    const pontuacaoJogosAtualizada = []
    let vezesBatidos = 0
    let piorJogo = 0
    let piorJogoindice
    let recorde

    for (let i in pontuacaoJogos) { //Transforma o array de strings em arrays de nuúmero
        const num = parseInt(pontuacaoJogos[i])
        pontuacaoJogosAtualizada.push(num)

    }

    recorde = pontuacaoJogosAtualizada[0]
    piorJogo = pontuacaoJogosAtualizada[0]

    for (let i in pontuacaoJogosAtualizada) {  //Conta quantas vezes o recorde foi batido

        if (pontuacaoJogosAtualizada[i] > recorde) {
            recorde = pontuacaoJogosAtualizada[i]
            vezesBatidos++
        }   

        if(pontuacaoJogosAtualizada[i] < piorJogo){
            piorJogo = pontuacaoJogosAtualizada[i]
            piorJogoindice = parseInt(i)
        }
    }

    piorJogoindice++

    const resultado = [vezesBatidos, piorJogoindice]

    console.log(resultado)
}

melhorPior("10 20 20 8 25 3 0 30 1")