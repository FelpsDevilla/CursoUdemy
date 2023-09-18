const vetorPilha = [1,2,3,4,5]
const vetorAdcionar = [6,7,8,9,10]

function adcionarNaLista(vetorBase, vetorAdcional){

    while (typeof (i = vetorAdcional.shift()) !== "undefined"){
        vetorBase.push(i)
    }
    
    console.log(vetorBase)
    console.log(vetorAdcional)
}

adcionarNaLista(vetorPilha, vetorAdcionar)