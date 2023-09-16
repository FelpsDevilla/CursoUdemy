function Crianca(nome, altura, taxaDeCrescimento) {
    this.nome = nome
    this.altura = altura
    this.taxaDeCrescimento = taxaDeCrescimento

    this.crescer = function () {
        altura += taxaDeCrescimento
    }

    this.getalturaAtual = function () {
        return altura
    }
}

function quandoUltrapassa(criancas) {
    const criancasEmOrdemAltura = criancas.sort((a, b) => a.altura - b.altura);
    const indiceLast = criancas.length - 1
    let criancaMaior = criancasEmOrdemAltura[indiceLast]
    let criancaMenor = criancasEmOrdemAltura[0]
    let anos = 0
   
    //Em quanto tempo a criança menor vai ultrapssar a maior

    if(criancaMenor.taxaDeCrescimento > criancaMaior.taxaDeCrescimento){
        while(criancaMaior.altura > criancaMenor.altura){
            criancaMenor.crescer()
            criancaMaior.crescer()
            criancaMaior.altura = criancaMaior.getalturaAtual()
            criancaMenor.altura = criancaMenor.getalturaAtual()
            anos++
        }
    
         console.log(`Em ${anos} anos ${criancaMenor.nome} vai ultrapassar a altura de ${criancaMaior.nome}`)
    }else{
        console.log(`${criancaMenor.nome} não vai conseguir ultrapassar nunca a altura de ${criancaMaior.nome}`)
    }

}


let crianca1 = new Crianca("Pedro", 120, 2)
let crianca2 = new Crianca("joão", 121, 6)
let crianca3 = new Crianca("Vitória", 127, 3)
let criancas = [crianca1, crianca2, crianca3]

quandoUltrapassa(criancas)