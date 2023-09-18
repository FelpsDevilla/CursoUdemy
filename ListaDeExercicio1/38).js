function printImpares(inicio = 0, fim = 100) {
    let numeros = []
    if (inicio > fim) {
        temp = fim
        fim = inicio
        inicio = temp
    }

    for (let i = inicio; i < fim; i++) {
        if ((i % 2) != 0) {
            numeros.push(i)
        }
    }

    return numeros
}

console.log(printImpares(100, 0))