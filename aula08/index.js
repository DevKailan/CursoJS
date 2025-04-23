const nome = 'Kailan';
const sobrenome = 'de Scena Pacheco';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
const anoAtual = 2025;
let anoNascimento;

let imc;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} 'anos, Pesa' ${peso} ' kg'`);
console.log(`tem ${alturaEmM} de altura e seu IMC é:  ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em:  ${anoNascimento}`);
