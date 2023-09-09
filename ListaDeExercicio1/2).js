function verificarTipoTriangulo(lado1, lado2, lado3){
    if (lado1 == lado2 & lado2 == lado3){
        console.log("Triangulo Equilatero")
    }else if(lado1==lado2 || lado2 == lado3 || lado1==lado3){
        console.log("Triangulo isoceles")
    }else{
        console.log("Trinagulo Escaleno")
    }
}

verificarTipoTriangulo(1,2,3)