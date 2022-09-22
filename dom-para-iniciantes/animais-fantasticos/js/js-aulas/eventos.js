// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"');

function classeAtivo(event) {
  event.preventDefault();

  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });

  this.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", classeAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementos = document.body.querySelectorAll("*");
console.log(elementos);

function elementosClicados(event) {
  console.log(this);
}

elementos.forEach((elemento) => {
  elemento.addEventListener("click", elementosClicados);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function removeElementosClicados(event) {
//   this.remove();
// }

// elementos.forEach((elemento) => {
//   elemento.addEventListener("click", removeElementosClicados);
// });

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function teclaT(event) {
  let tecla = event.key;

  if (tecla == "t") {
    document.body.style.fontSize = "20px";
  }
}

window.addEventListener("keydown", teclaT);
