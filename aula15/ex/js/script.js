const numero = Number (prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ''
texto.innerHTML += `<p>Raiz quadrada do seu numero é: ${numero ** 2} </p>`;
texto.innerHTML += `<p>${numero} é número inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>é Arredondado para baixo: ${(Math.floor(numero))} </p>`;
texto.innerHTML += `<p> Arrendondado para cima: ${(Math.ceil(numero))}</p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`

