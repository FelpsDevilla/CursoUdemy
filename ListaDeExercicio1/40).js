function ReturnClasifi(vetorNotas){
    let conceito
    let arrayConceitos = []
    for(let i = 0; i < vetorNotas.length; i++){
        
        if(vetorNotas[i] <= 4.9){
            conceito = "D"
        }else if(vetorNotas[i] <= 6.9){
            conceito = "C"
        }else if(vetorNotas[i] <= 8.9){
            conceito = "B"
        }else if(vetorNotas[i] <= 10){
            conceito = "A"
        }else{
            console.error("nota invalida");
        }

        arrayConceitos.push(conceito)

        console.log(`A nota ${vetorNotas[i]} está no conceito de ${arrayConceitos[i]}`)
    }
}

ReturnClasifi([8,3,1,7,4,9,10])