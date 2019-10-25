const iv = require('./insertVenda')
const schedule = require('node-schedule')



var j = schedule.scheduleJob('1 * * * * *', async function () {


    let variable = Math.floor(Math.random() * (100 - 0)) + 0
    if (variable > 30) {
        const c = await iv.getCustomer()
        const p = await iv.getProducts()
        let cnum = Math.floor(Math.random() * (c.length - 0)) + 0
        let pnum = Math.floor(Math.random() * (p.length - 0)) + 0
        let venda = await iv.insertVendas([c[cnum]], [p[pnum]], 1, true, true)
        console.log('Venda registrada', venda)
    }
})


var j = schedule.scheduleJob('5 * * * * *', async function () {


    let variable = Math.floor(Math.random() * (100 - 0)) + 0
    if (variable > 30) {
        const c = await iv.getCustomer()
        const p = await iv.getProducts()
        let cnum = Math.floor(Math.random() * (c.length - 0)) + 0
        let pnum = Math.floor(Math.random() * (p.length - 0)) + 0
        let venda = await iv.insertVendas([c[cnum]], [p[pnum]], 1, true, true)
        console.log('Venda registrada', venda)
    }
})



var j = schedule.scheduleJob('15 * * * * *', async function () {


    let variable = Math.floor(Math.random() * (100 - 0)) + 0
    if (variable > 30) {
        const c = await iv.getCustomer()
        const p = await iv.getProducts()
        let cnum = Math.floor(Math.random() * (c.length - 0)) + 0
        let pnum = Math.floor(Math.random() * (p.length - 0)) + 0
        let venda = await iv.insertVendas([c[cnum]], [p[pnum]], 1, true, true)
        console.log('Venda registrada', venda)
    }
})




var j = schedule.scheduleJob('25 * * * * *', async function () {


    let variable = Math.floor(Math.random() * (100 - 0)) + 0
    if (variable > 30) {
        const c = await iv.getCustomer()
        const p = await iv.getProducts()
        let cnum = Math.floor(Math.random() * (c.length - 0)) + 0
        let pnum = Math.floor(Math.random() * (p.length - 0)) + 0
        let venda = await iv.insertVendas([c[cnum]], [p[pnum]], 1, true, true)
        console.log('Venda registrada', venda)
    }
})

var j = schedule.scheduleJob('35 * * * * *', async function () {


    let variable = Math.floor(Math.random() * (100 - 0)) + 0
    if (variable > 30) {
        const c = await iv.getCustomer()
        const p = await iv.getProducts()
        let cnum = Math.floor(Math.random() * (c.length - 0)) + 0
        let pnum = Math.floor(Math.random() * (p.length - 0)) + 0
        let venda = await iv.insertVendas([c[cnum]], [p[pnum]], 1, true, true)
        console.log('Venda registrada', venda)
    }
})

var j = schedule.scheduleJob('45 * * * * *', async function () {


    let variable = Math.floor(Math.random() * (100 - 0)) + 0
    if (variable > 30) {
        const c = await iv.getCustomer()
        const p = await iv.getProducts()
        let cnum = Math.floor(Math.random() * (c.length - 0)) + 0
        let pnum = Math.floor(Math.random() * (p.length - 0)) + 0
        let venda = await iv.insertVendas([c[cnum]], [p[pnum]], 1, true, true)
        console.log('Venda registrada', venda)
    }
})


var j = schedule.scheduleJob('55 * * * * *', async function () {


    let variable = Math.floor(Math.random() * (100 - 0)) + 0
    if (variable > 30) {
        const c = await iv.getCustomer()
        const p = await iv.getProducts()
        let cnum = Math.floor(Math.random() * (c.length - 0)) + 0
        let pnum = Math.floor(Math.random() * (p.length - 0)) + 0
        let venda = await iv.insertVendas([c[cnum]], [p[pnum]], 1, true, true)
        console.log('Venda registrada', venda)
    }
})


