//Notação Literal

const obj1 = {};

//Objeto em Js

const obj2 = new Object

//Funções construtoras

function criarProduto(nome, preco, desc){
    this.nome = nome
    this.getPreco = () => {
        return preco - desc
    }
}

const p1 = new criarProduto("caneta", 2, 1)

//Funções Factory

function cirarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        getSalario(){
            return (salarioBase / 30) * (faltas - 30)
        }
    }
}

const f1 = cirarFuncionario("jonas", 5000, 3)

//Object.create

const filha = Object.create(null)
filha.nome = "ana"

//Função que pega JSON e retorna Obj

const fromJson = JSON.parse('{"nome": "João","idade": "30","cidade": "São Paulo"}')

console.log(fromJson)