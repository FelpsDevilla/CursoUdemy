function verificBiSexto(ano){
    if(ano % 4 === 0 && ano % 100 != 0){
        console.log(true)
    }else if(ano % 400 == 0){
        console.log(true)
    }else{
        console.log(false)
    }
}
verificBiSexto(2028)