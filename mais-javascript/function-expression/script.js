// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
// priceNumber("R$ 99,99");

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(() => {
  const turtle = console.log("GO SLOWLY, BUT NEVER STOP!!!");
  return turtle;
})();

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(function () {
  console.log("Agora sim!!!");
});
