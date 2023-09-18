function juntarArrays() {
    const vetorInteiros = [1, 2, 3, 4, 5]
    const vetorString = [`pato`, `macaco`, `cachorro`, `leao`, `dinosauro`]
    const vetorDouble = [1.22, 4.33, 3.22, 3.33, 255.22]

    const vetorNovo1 = vetorInteiros.concat(vetorString, vetorDouble)
    const vetorNovo2 = vetorString.concat(vetorDouble, vetorInteiros)

    console.log(vetorNovo1, vetorNovo2)

}

juntarArrays()