function pa(qntd, inicio, razao) {
    let qntdAtual = 0
    let numeros = []

    for (let i = inicio + 1; qntd > qntdAtual; i = i + razao) {
        numeros.push(i)
        qntdAtual++
    }
    return numeros
}

function pg(qntd, inicio, razao){
    let qntdAtual = 0
    let numeros = []

    for (let i = inicio; qntd > qntdAtual; i = i * razao) {
        numeros.push(i)
        qntdAtual++
    }
    return numeros
}


console.log(pa(100, 0, 1))

console.log(pg(20, 10, 2))