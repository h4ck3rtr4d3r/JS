/*
H4ck3rtr4d3r tem 39 anos, pesa 72kg tem 1.70 de altura e seu IMC é de 17.42
*/

const nome = 'H4ck3r';
const sobrenome = 'Tr4d3r';
let idade = 39;
let peso = 70;
let altura = 1.74;
let indiceMassaCorporal = (peso / altura)* altura;
let dataDeNascimento = '14/05/' + (2021 - 39);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura, seu IMC é de ${indiceMassaCorporal} e sua data de nascimento é ${dataDeNascimento}.`);

