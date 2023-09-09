function Calc(dividendo, divisor){
    const resultadoDaDivisao = (dividendo/divisor);
    const restoDaDivisao = (dividendo%divisor)

    console.log(`O resultado da divisão é ${Math.floor(resultadoDaDivisao)} e o resto é ${restoDaDivisao}`)
}

Calc(5, 2)