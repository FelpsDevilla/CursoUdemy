function calcFatorial(num){
    let contador = num
    let fatorial = num
    
    while(contador != 0){
       fatorial = fatorial * contador
        contador--
    }

    console.log(fatorial)
}

calcFatorial(4)