// Retorne no console todas as imagens do site

const imgs = document.querySelectorAll("img");

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgs2 = document.querySelectorAll('img[src^="img/imagem"');

imgs2.forEach((item) => {
  return console.log(item);
});

// Selecione todos os links internos (onde o href começa com #)

const localHref = document.querySelectorAll('a[href^="#"');

localHref.forEach((item) => {
  return console.log(item);
});

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector(".animais-descricao h2");

console.log(primeiroH2);

// Selecione o último p do site

const ultimoP = document.querySelectorAll("p");

console.log(ultimoP[ultimoP.length - 1]);
