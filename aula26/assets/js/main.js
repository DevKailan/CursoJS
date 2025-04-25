const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value); // Corrigido para "Number"

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc); 
    setResultado(`Seu IMC é ${imc} (${nivelImc})`, true);
});
    

function criaP() {
    const p = document.createElement('p');
    return p;
}

function getImc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
} 

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP(); // Criação do elemento antes de usá-lo
    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }



    p.innerHTML = msg;
    resultado.appendChild(p);
}

function getNivelImc (imc) {

const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) return nivel[5];
    if(imc >= 35 && 39.9) return nivel[4];
    if(imc >=30 && 34.9) return nivel[3];
    if(imc >= 25 && 29.9) return nivel[2];
    if (imc >= 18.6 && 24.9) return nivel[1];
    if (imc < 18.5)  return nivel[0];
        

    
}
