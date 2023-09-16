function contarIntervalo(inicio, fim){
    let cont = 0
    const intervalo = [inicio, fim]
    for(let i = intervalo[1]; i > intervalo[0];i--){
        cont++
    }
    console.log(`Existem ${cont} números que estão entre o intervalo de ${intervalo[0]} a ${intervalo[1]}`);

}

contarIntervalo(10, 100)