function verificarDia (dia){
    switch(dia){
        case 7: case 1: 
            console.log("Fim de semana")
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia util")
            break
        default:
            console.log("Invalido")
    }
}

verificarDia(5)


function teste(){
    switch(undefined){
        case 1: console.log("teste")
        case console.log("Testando de baixo"):
    }
}

teste()