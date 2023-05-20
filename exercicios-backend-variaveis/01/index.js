const prompt = require('prompt-sync')();
const altura = prompt('Digite a sua altura em metros: ');
const peso = prompt('Digite o seu peso em kg: ');
const num = (Number (altura * altura))
const imc = peso / num
const resultado = imc



console.log(`O seu IMC é: ${resultado}`)
