function createNumberArray(quantasVzs = 0) {

    let numeros = []

    for (let i = 1; i < (quantasVzs + 1); i++) {
        numeros.push(i)
    }

    return numeros
}

function quantosPares(number) {
    let impairs = 0
    let pairs = 0

    for (let i = 0; number.length > i; i++) {
        let rest = number[i] % 2
        if (rest != 0) {
            impairs++
        }else{
            pairs++
        }
    }
    console.log(`Em ${number.length} existem ${pairs} números pares e números ${impairs} impares`)
}

let numeros = createNumberArray(43243)

quantosPares(numeros)