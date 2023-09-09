function formatarNum(num){
    const parteInteira = parseInt(num);
    const parteDecimal = Math.floor(parseFloat((num) - parteInteira) * 100);
    const dinheiroFormatado = `R$${parteInteira},${parteDecimal}`
    return dinheiroFormatado
}

formatarNum(1602.86)