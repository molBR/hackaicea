const fetch = require('node-fetch')


insert = async (customer) => {
    const rawResponse = await fetch('https://hackaengine-dot-red-equinox-253000.appspot.com/customer', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    });
    console.log(rawResponse)
}



const mascNome = ['Brenner', 'Renato', 'Rafael', 'Deivyson', 'Pedro', 'Geferson', 'Otávio', 'Marcelo', 'Paulo', 'Gustavo']
const sobreNome = ['Homer', 'Luís', 'Silva', 'Mathias', 'Maladeira', 'Xavier', 'Davi', 'Batista', 'Azevedo', 'Dhali']
const femNome = ['Alice', 'Amanda', 'Carol', 'Raquel', 'Maria', 'Livia', 'Letícia', 'Natália', 'Larissa', 'Viviane']
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const aux1 = Math.floor(Math.random() * (2 - 0)) + 0;
        let name
        let sex
        if (aux1 === 0) {
            name = mascNome[Math.floor(Math.random() * (10 - 0)) + 0] + ' ' + sobreNome[Math.floor(Math.random() * (10 - 0)) + 0];
            sex = 'male'
        } else {
            name = femNome[Math.floor(Math.random() * (10 - 0)) + 0] + ' ' + sobreNome[Math.floor(Math.random() * (10 - 0)) + 0];
            sex = 'female'
        }
        let age = Math.floor(Math.random() * (80 - 18)) + 18
        let phone = 'ausente'
        customer = {
            name: name,
            phone: phone,
            age: age,
            sex: sex

        }
        insert(customer)
    }
}