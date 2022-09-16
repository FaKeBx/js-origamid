// Por qual motivo o código abaixo retorna com erros? pois as variaveis estao dentro de um escopo
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(var, marca, portas);

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}

somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for (let i = 0; i <= numero; i++) {
  console.log(numero);
}

let total = 10 * numero;
console.log(total);
