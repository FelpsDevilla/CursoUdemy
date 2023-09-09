const capitalInicial = 1400;
const taxaDeJuros = 7;
const tempoAplicado = 2;

function jurosFormat(taxaDeJuros){
    const jurosdecimal = taxaDeJuros / 100
    return jurosdecimal
}

function formatarDinheiro(num){
    const parteInteira = parseInt(num);
    let parteDecimal = Math.floor(parseFloat((num) - parteInteira) * 100);

    if (parteDecimal < 10) {
        parteDecimal = "0" + parteDecimal;
      } 

    const dinheiroFormatado = `R$${parteInteira},${parteDecimal}`
    return dinheiroFormatado
}

function calcJurosSimp (capital, juros, tempo){
    const JurosSimp = (capital * (jurosFormat(juros)) * tempo)
    return JurosSimp
}

function calcJurosComp (capital, juros, tempo){
    const jurosComp = ((capital * (1 + jurosFormat(juros))**tempo)- capital)
    return jurosComp
}

const jurosSimp = formatarDinheiro(calcJurosSimp(capitalInicial, taxaDeJuros, tempoAplicado))
const jurosComp = formatarDinheiro(calcJurosComp(capitalInicial, taxaDeJuros, tempoAplicado))

console.log(`Seu investimento renderá ${jurosSimp} a juros simples e ${jurosComp} de juros compostos`)