function calculadora(operacao, valor1, valor2){
    const frasePadrão = `O resultado de ${valor1} ${operacao} ${valor2} é igual a `
    switch(operacao){
        case "+":{
           const resultado = valor1 + valor2
           console.log(frasePadrão + resultado)
           break
        }
        case "-":{
            const resultado = valor1 - valor2
            console.log(frasePadrão + resultado)
            break
         }
         case "*":{
            const resultado = valor1 * valor2
            console.log(frasePadrão + resultado)
            break
         }
         case "/":{
            const resultado = valor1 / valor2
            console.log(frasePadrão + resultado)
            break
         }
         default:
            console.log("Operação invalida")
    }
}

calculadora("/", 9, 2)