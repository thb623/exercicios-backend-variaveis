const prompt = require('prompt-sync')();
const temperatura = prompt('Digite a temperatura em farenheit: ');
const num = (Number (temperatura - 32))
const celsius = num * 5 / 9
const resultado = celsius



console.log(`O resultado em celsius é: ${resultado}`)
