// Retorne o url da página atual utilizando o objeto window

const url = window.location.href;

console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroAtivo = document.querySelector(".ativo");

console.log(primeiroAtivo);

// Retorne a linguagem do navegador

const lang = document.querySelector("html").getAttribute("lang"); //linguagem do documento html

const outro = window.navigator.language; // linguagem do meu navegador

console.log(lang);
console.log(outro);

// Retorne a largura da janela

const largura = window.innerWidth;

console.log(largura);
