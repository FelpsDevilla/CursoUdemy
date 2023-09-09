const horasTotais = 7;

function formatarHoras(hora) {
    let horaInteira = Math.floor(hora);
    let minutos = ((hora - horaInteira) * 60).toFixed(0);
    return minutos = horaInteira + ":" + minutos.toString(2).padStart(2, '0');
}

function horasTrab(horasFeitas) {
    let horasRestantes = horasTotais - horasFeitas;
    let tempoRestante = (60 * horasRestantes).toFixed(0);
    let horasTrabalhadas = formatarHoras(horasFeitas);
    let temp = formatarHoras(horasRestantes);

    console.log(`Você já lançou ${horasTrabalhadas} horas`);
    console.log(`Ainda faltam ${tempoRestante} minutos ou seja faltam ${temp}`)

    {const MIN_FEITOS = (horasFeitas*60);
        const MIN_FEITOS_MANHA = 240 - MIN_FEITOS;
    
        console.log(`Pela manhã voce presica fazer 240min e a tarde 180min`)}

}

horasTrab(6.43);

    console.log(`Pela manhã voce presica fazer 240min e a tarde 180min`)
