function informValue(total) {
    let pegarQntd
    let resto //usar let resto para coiferir otras nootas

   if(total >= 100){
    pegarQntd = total /100
    console.log(`Vai precisar de ${pegarQntd} notas de 100`)
   } 
}

informValue(500)