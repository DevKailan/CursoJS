// function criaPessoa (nome, sobrenome, idade){
//     return {
//         nome, sobrenome, idade

//     }
// }

// const pessoa1 = criaPessoa('Kailan', 'Scena', 18);
// const pessoa2 = criaPessoa('Kailan', 'Pinto', 23);
// const pessoa3 = criaPessoa('Kailan', 'Luiz', 24);

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade, pessoa2.nome, pessoa2.sobrenome, pessoa2.idade, pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);


const pessoa1 = {
    nome: 'Kailan',
    sobrenome: 'Scena',
    idade :25,
    fala() {
        console.log(`A minha idade atual é ${this.idade} anos`);

    },

    incrementaIdade() { 
        this.idade++ 
    }
};

pessoa1.fala(); // Chama a função fala dentro do objeto pessoa1
pessoa1.incrementaIdade(); // Chama a função incrementaIdade dentro do objeto pessoa1
pessoa1.fala(); // Chama a função fala novamente para verificar se a idade foi incrementada
pessoa1.incrementaIdade(); // Chama a função incrementaIdade novamente para incrementar a idade mais uma vez
pessoa1.fala(); // Chama a função fala novamente para verificar se a idade foi incrementada
pessoa1.incrementaIdade(); // Chama a função incrementaIdade novamente para incrementar a idade mais uma vez
pessoa1.fala(); // Chama a função fala novamente para verificar se a idade foi incrementada
pessoa1.incrementaIdade(); // Chama a função incrementaIdade novamente para incrementar a idade mais uma vez
pessoa1.fala(); // Chama a função fala novamente para verificar se a idade foi incrementada
pessoa1.incrementaIdade(); // Chama a função incrementaIdade novamente para incrementar a idade mais uma vez
pessoa1.fala(); // Chama a função fala novamente para verificar se a idade foi incrementada
pessoa1.incrementaIdade(); // Chama a função incrementaIdade novamente para incrementar a idade mais uma vez
pessoa1.fala(); // Chama a função fala novamente para verificar se a idade foi incrementada
pessoa1.incrementaIdade(); // Chama a função incrementaIdade novamente para incrementar a idade mais uma vez
