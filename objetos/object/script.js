// Crie uma função que verifique
// corretamente o tipo de dado

const teste = ["banana"];

function tipoDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(tipoDado(teste));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    configurable: false,
  },
});

console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo

const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

configuracao.freeze();

configuracao.background = "#fff";

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

Object.getOwnPropertyNames(String);
Object.getOwnPropertyNames(Array);
