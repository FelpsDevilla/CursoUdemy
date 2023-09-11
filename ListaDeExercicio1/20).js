function informValue(total) {
    const notas = [100, 50, 20, 10, 5, 1]
    let quantidadeNotas = Array(notas.length).fill(0)

    for (let i = 0; i < notas.length; i++) {
        while (total >= notas[i]) {
            total -= notas[i];
            quantidadeNotas[i]++;
        }
    }

    for (let i = 0; i < notas.length; i++) {
        if (quantidadeNotas[i] > 0) {
            console.log(`Vai precisar de ${quantidadeNotas[i]} nota(s) de R$${notas[i]}`);
        }
    }
}

informValue(570)