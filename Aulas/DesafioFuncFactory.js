function criarPessoa(nome, idade){
    return{
        nome,
        idade,
        falar: () => `Olá me chamo ${nome}`
    }
}

const p1 = criarPessoa("Vitor", 30);

console.log(p1.falar())