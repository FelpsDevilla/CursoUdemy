function arredondar(nota) {
    const notafom = (nota / 10) + 0.000001
    let parteInteira = parseInt(notafom)
    let parteDecimal = parseInt((parseFloat((notafom) - parteInteira) * 10))

    if (parteDecimal >= 8) {
        parteDecimal = 0
        parteInteira++
    }else if (parteDecimal >= 3 && parteDecimal < 5) {
        parteDecimal = 5
    }

    parteDecimal = (parteDecimal / 10)

    const notaCorrigida = (parteInteira + parteDecimal) * 10
    return notaCorrigida
}

function avaliarNota(nota) {

    if (nota >= 38) {
    nota = arredondar(nota)
        console.log(`Aprovado nota ${nota}`)
    } else {
        console.log("Reprovado")
    }
}

avaliarNota(38)