function calcrReajuste(plano, salario){
    switch(plano){
        case "a":{
            const aumento = salario * 0.1
            salario = salario + aumento
            console.log(`Seu aumente foi de 10% e seu novo salário é de R$${salario}`)
            break
        }
        case "b":{
            const aumento = salario * 0.15
            salario = salario + aumento
            console.log(`Seu aumente foi de 15% e seu novo salário é de R$${salario}`)
            break
        }
        case "c":{
            const aumento = salario * 0.2
            salario = salario + aumento
            console.log(`Seu aumente foi de 20% e seu novo salário é de R$${salario}`)
        }
    }
}


calcrReajuste("a", 1000)