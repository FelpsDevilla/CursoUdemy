function calcMedia(pesos, notas) {
    const media = ((notas[2] * pesos[0]) + ((notas[0]) * pesos[1]) + ((notas[1]) * pesos[1])) / (pesos[0] + pesos[1])
    return media
}

function escolarSystem(id, nota1, nota2, nota3) {
    const notas = ([nota1, nota2, nota3]).sort();
    const pesos = [4, 3];


    const media = calcMedia(pesos, notas)
    let aprovadoOrNot = media >= 7 ? "Aprovado" : "Reprovado"

    console.log(`O aluno de id ${id} foi ${aprovadoOrNot}`)

}

escolarSystem(13, 65, 34, 54)