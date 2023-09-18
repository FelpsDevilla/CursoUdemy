const srting1 = "Macacorato"
const string2 = "Rato"

function transform(string){
   const stringAtt = string.toLowerCase()
   const stringVetor = stringAtt.split("")
   return stringVetor
}

function verificaChar(caracteres, analisada){
    const charsPrin = transform(caracteres)
    const charsAnals = transform(analisada)
    const arrayAnls = []
    let letraAtual
    let contador = 0
    
    while (typeof (i = charsAnals.shift()) !== "undefined") {
        letraAtual = i
        if(charsPrin.includes(letraAtual) == true){
            contador++
        }
        arrayAnls.push(letraAtual)
    }

    if(contador == arrayAnls.length){
        return true
    }else{
        return false
    }
}

console.log(verificaChar(srting1, string2))
