function calcBhaskara(a,b,c) {
    const delta = b**2 - 4 * a * c

    console.log(delta)
    
    const x1 = ((-b) + Math.sqrt(delta)) / (2*a);
    const x2 = ((-b) - Math.sqrt(delta)) / (2*a);

    if (delta > 0){
        console.log(x1, x2)
    }else{
        console.log("Delta é negativo")
    }
    
}

calcBhaskara(1,1,1)