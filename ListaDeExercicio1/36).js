const multiplicador = 3
const teste = [1,2,6]
const multiplicadosMaior5 = teste.map(multVetorMairQ5)
const multiplicadosGeral = teste.map(multVetorGeral)

function multVetorMairQ5(vetor){
    if(vetor > 5){
        return vetor * multiplicador
    }else{
        return vetor
    }
}

function multVetorGeral(vetor){
        return vetor * multiplicador
}

console.log(multiplicadosMaior5, multiplicadosGeral)