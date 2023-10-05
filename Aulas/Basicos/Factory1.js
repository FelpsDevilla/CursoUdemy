function criarPessoa(nome, idade){
    return{
        nome,
        idade
    }
}

const felipe = criarPessoa("Felipe", 21);

console.log(felipe)

//Funções Factory ou construtoras retornam um objeto;