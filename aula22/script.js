// && -> AND -> E (Todas as expressoes precisam ser verdadeiras para retornar true)
// || -> OR -> OU
// ! -> NOT -> NÃO 

const expressaoAnd = true && true && true; // true
const expressaoOr = true || false || false; // true

const usuario = 'Lucas';
const senha = '123456';

const vaiLogar = usuario === 'Lucas' !== senha === '123456';
console.log(vaiLogar); // true
