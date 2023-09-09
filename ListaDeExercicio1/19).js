function makerOrder(code, qnt = 1) {
    var product
    var money
    switch (code) {
        case 100:
            product = "Hot Dog"
            money = 3.00
            break
        case 200:
            product = "Simple Burguer"
            money = 4.00
            break
        case 300:
            product = "Chesse burguer"
            money = 5.50
            break
        case 400:
            product = "Bauru"
            money = 7.50
            break
        case 500:
            product = "Soda"
            money = 3.50
            break
        case 600:
            product = "Hot Dog"
            money = 2.80
            break
    }

    const order = money * qnt

    console.log(`Your ${product} is $${order}`)

}

makerOrder(100, 6)