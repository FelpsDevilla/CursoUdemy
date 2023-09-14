function createNumberArray(quantasVzs = 0){

    let numeros = []

    for(let i = 1; i < (quantasVzs + 1); i++){
        numeros.push(i)
    }
    console.log(numeros)
}


createNumberArray(50)