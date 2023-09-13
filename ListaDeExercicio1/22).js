function calcAnuidade(mes, valor) {
    let pagar = valor
    const juros = 0.05

    for (let i = 0; i < mes; i++) {
        if (mes > 1) {
            console.log(pagar)
            pagar = pagar + (pagar * juros)
        }
    }
    console.log(pagar)
}

calcAnuidade(12, 100)