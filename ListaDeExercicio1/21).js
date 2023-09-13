function valuePlano(idadeConveniado) {
    const valorPadrao = 100
    const idades = [10, 30, 60, 61]
    const adcionais = [80, 50, 95, 130]
    let valorTotal


    for (let i = 0; i < idades.length & valorTotal == undefined; i++) {
        if (idades[i] >= idadeConveniado) {
            valorTotal = valorPadrao + adcionais[i]
        }
    }
    console.log(valorTotal)
}

valuePlano(43)