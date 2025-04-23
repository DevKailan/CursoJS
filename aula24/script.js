/*
Entre 0 e 11: Bom dia!
Entre 12 e 17: Boa tarde!
// Entre 18 e 23: Boa noite!
// Entre 0 e 23: Olá!
*/
// If pode ser usado sozinho ou usado como verdadeiro ou falso
// Sempre que utilizar a palavra else, preciso de um if antes
// Se o if for verdadeiro, ele não vai executar o else
// Se o if for falso, ele vai executar o else
// Posso ter apenas um else na checagem
// Podemos usar condiçoes sem else, apenas if e else

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
    console.log(`Boa tarde!`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa Noite!`);
} else {
    console.log(`Olá!`);
}

