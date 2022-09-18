// Retorne um número aleatório
// entre 1050 e 2000

let aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

// console.log(aleatorio);

// Retorne o maior número da lista abaixo
let numeros = "4, 5, 20, 8, 9";

const numerosLimpos = numeros.split(", ");
const numerosMax = Math.max(...numerosLimpos);

// console.log(numerosMax);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(item) {
  const limpos = item
    .trim()
    .toLocaleUpperCase()
    .replace("R$ ", "")
    .replace(",", ".");

  const round = parseFloat(limpos).toFixed(2);

  return +round;
}

let soma = 0;
listaPrecos.forEach((item) => {
  soma += limparPreco(item);
});

console.log(soma);
