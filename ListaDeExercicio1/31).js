function qntNegativos(vetor){
    let negativos = 0
    vetor = vetor.sort()
    for(let i = 0; vetor.length > i & vetor[i] < 0; i++){
        negativos++
    }
    console.log(negativos)
}

qntNegativos([-3, -4, -2, -100, 3,8,23,1,0, -23])