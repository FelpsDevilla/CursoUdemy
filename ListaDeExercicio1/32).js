function calcMediaVetor(vetor){
    let total = 0
    let media

    for(let i = 0; vetor.length > i; i++){
        total += vetor[i]
    }

    media = total / vetor.length

    console.log(media)
}

calcMediaVetor([11,11,11, 23, 545, 6656, 23])