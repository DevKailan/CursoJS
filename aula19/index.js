/*
Primitivos (Imutáveis) - string, number, boolean, null, undefined (symbol, bigint)

Referencia (Mutáveis) - array, object, function
*/

let a = [1,2,3];

let b = a;

console.log(a, b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);