const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("qual é o seu nome? ", function(name) {
    console.log(`olá, ${name}!`);
    rl.close();
})
