function createNumberArray(quantasVzs = 0) {

    let numeros = []

    for (let i = 1; i < (quantasVzs + 1); i++) {
        numeros.push(i)
    }

    return numeros
}

function findPairs(number) {

    for (let i = 0; number.length > i; i++) {
        let rest = number[i] % 2
        if (rest != 0) {
            number.splice(i, 1)
        }
    }
    console.log(number)
}

let numeros = createNumberArray(100)

findPairs(numeros)