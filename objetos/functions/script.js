// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const caracteres = document.querySelector("section").innerText.length;
// console.log(caracteres);

const paragrafos = Array.from(document.querySelectorAll("p"));

const caracteresParagrafo = paragrafos.reduce((acumulador, caracter) => {
  return acumulador + caracter.innerText.length;
}, 0);

// console.log(caracteresParagrafo);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function newHtml(tag, classe, conteudo) {
  const newTag = document.createElement(tag);
  classe ? newTag.classList.add(classe) : null;
  conteudo ? (newTag.innerText = conteudo) : null;
  return newTag;
}

console.log(newHtml("p", "ativo", "Isso é perfeito"));
console.log(newHtml("ul", "ativo", "Isso é mais que perfeito"));
console.log(newHtml("div", "ativo"));
console.log(newHtml("div"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = newHtml.bind(null, "h1", "titulo");

console.log(h1Titulo("Baila Vini!!!"));
