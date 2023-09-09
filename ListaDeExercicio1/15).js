function escolherCarro(modelo){
    switch(modelo){
        case "hatch":{
            console.log("Compra efetuada com sucesso")
            break
        }
        case "sedan": case "motocicleta": case "caminhote":{
            console.log(`Tem certeza que na prefere um hatch em vez de ${modelo}?`)
            break
        }
        default:
            console.log("Não trabalhamos com este modelo!")
    }
}

escolherCarro("motocicleta")