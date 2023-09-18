function invert(vetorA, vetorB) {
    while (typeof (i = vetorB.shift()) !== "undefined") { //Limpa o array B e coloca em A
        vetorA.push(i)
    }

    while (vetorB.length != vetorA.length){ //Pega os elementos de A e coloca em B
        vetorB.push(vetorA.shift())
    }

    console.log(vetorA)
    console.log(vetorB)

}

invert([1, 2, 3], [5, 6, 7])