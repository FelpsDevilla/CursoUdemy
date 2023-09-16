function menor_e_maior(vetor){
    const vetoremOrdem = vetor.sort()
    const indiceLast = vetoremOrdem.length - 1
    console.log(`O maior valor é ${vetoremOrdem[indiceLast]} e o menor é ${vetoremOrdem[0]}`)
}

menor_e_maior([24, 43, 22, 67, 33])