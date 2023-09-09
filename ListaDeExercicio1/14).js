function verifyfruit(fruta){
    switch(fruta){
        case "maçã":
            console.log(`Não vendemos ${fruta} aqui`)
            break
        case "kiwi":
            console.log(`Estamos com escassez de ${fruta}`)
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o Kg")
    }
}

verifyfruit("melancia")