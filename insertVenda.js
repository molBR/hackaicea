const fetch = require('node-fetch')


getCustomer = async () => {
    const rawResponse = await fetch('https://hackaengine-dot-red-equinox-253000.appspot.com/customer?per_page=200&offset=0', {
        method: 'GET'
    });
    return (rawResponse.json())
}

getProducts = async () => {
    const rawResponse = await fetch('https://hackaengine-dot-red-equinox-253000.appspot.com/products?per_page=200&offset=0', {
        method: 'GET'
    })
    return (rawResponse.json())
}


insertVendas = async (customer, products, num, fidelidadeON, ongoing) => {
    maxCust = customer.length
    maxProduct = products.length

    for (let i = 0; i < num; i++) {
        let c = Math.floor(Math.random() * (maxCust - 0)) + 0
        let p = Math.floor(Math.random() * (maxProduct - 0)) + 0
        let points = 0
        let chonsenCliente = customer[c]
        let chosenProduct = products[p]
        let quantity
        let indFidelidade = Math.floor(Math.random() * (100 - 0)) + 0


        if (chosenProduct.unit == 'unidade') {
            quantity = Math.floor(Math.random() * (50 - 1)) + 1
        } else {
            quantity = Math.random() * (50 - 1) + 1
        }
        let price = quantity * chosenProduct.pricePerUnit
        if (fidelidadeON) {
            if (indFidelidade < 70) {
                if (chosenProduct.unit == 'unidade') {
                    points = Math.floor(price / 3)
                    quantity = quantity + Math.floor(quantity * 0.4)
                } else {
                    points = Math.floor(quantity)
                    quantity = quantity + quantity * 0.4
                }
            }
        }
        if (ongoing) {
            let d = new Date()
            let dia = d.getDay()
            let mes = d.getMonth()
            let ano = 2019
            let hora = d.getHours()
            let minuto = d.getMinutes()
        } else {
            let d = new Date()
            let dia = Math.floor(Math.random() * (21 - 25)) + 21
            let mes = 10
            let ano = 2019
            let hora = Math.floor(Math.random() * (23 - 1)) + 1
            let minuto = Math.floor(Math.random() * (59 - 1)) + 1
        }


        let dateD = {
            dia: dia,
            mes: mes,
            ano: ano,
            hora: hora,
            minuto: minuto
        }

        let sale = {
            points: points,
            cliente: chonsenCliente,
            price: price,
            products: [chosenProduct],
            quantity: quantity,
            date: dateD
        }
        const rawResponse = await fetch('https://hackaengine-dot-red-equinox-253000.appspot.com/sales', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sale)
        });
        console.log(rawResponse)
    }

    //return new Promise(async (resolve) => { resolve(await rawResponse.json()) })
    return new Promise(async (resolve) => { resolve('ok') })
}


getData = async () => {
    const customers = await getCustomer()
    const products = await getProducts()
    await insertVendas(customers, products, 500, false, false)
    await insertVendas(customers, products, 800, true, false)
}


getData()

module.exports = {
    getCustomer,
    getProducts,
    insertVendas
}