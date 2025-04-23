function meuEscopo() {
  // Define uma função chamada `meuEscopo` para encapsular o código e evitar poluir o escopo global.

  const form = document.querySelector('.form');
  // Seleciona o formulário HTML com a classe `form` e o armazena na variável `form`.

  const resultado = document.querySelector('.resultado');
  // Seleciona o elemento HTML com a classe `resultado` onde os dados serão exibidos.

  const pessoas = [];
  // Cria um array vazio chamado `pessoas` para armazenar os dados das pessoas cadastradas.

  function recebeEventoForm(evento) {
    // Define uma função que será executada quando o formulário for enviado.

    evento.preventDefault();
    // Previne o comportamento padrão do formulário (recarregar a página ao enviar).

    const nome = form.querySelector('.nome');
    // Seleciona o campo de entrada com a classe `nome` dentro do formulário.

    const sobrenome = form.querySelector('.sobrenome');
    // Seleciona o campo de entrada com a classe `sobrenome` dentro do formulário.

    const peso = form.querySelector('.peso');
    // Seleciona o campo de entrada com a classe `peso` dentro do formulário.

    const altura = form.querySelector('.altura');
    // Seleciona o campo de entrada com a classe `altura` dentro do formulário.

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });
    // Adiciona um objeto com os valores dos campos do formulário ao array `pessoas`.

    console.log(pessoas);
    // Exibe o array `pessoas` no console para depuração.

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value}, ${altura.value}</p>`;
    // Adiciona os dados da pessoa cadastrada ao elemento `resultado` no formato de um parágrafo.
  }

  form.addEventListener('submit', recebeEventoForm);
  // Adiciona um ouvinte de evento ao formulário que executa a função `recebeEventoForm` quando o formulário é enviado.
}

meuEscopo();
// Chama a função `meuEscopo` para que o código seja executado.