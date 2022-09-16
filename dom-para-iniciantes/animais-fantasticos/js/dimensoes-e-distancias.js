// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector("img");

console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens

const imgs = document.querySelectorAll("img");

function somaLargura() {
  let soma = 0;
  imgs.forEach((item) => {
    const largura = item.offsetWidth;
    soma += largura;
  });
  console.log(soma);
}

window.onload = () => {
  somaLargura();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((item) => {
  const largura = item.offsetWidth;
  const altura = item.offsetHeight;

  console.log(largura, altura);

  if (largura >= 48 && altura >= 48) {
    console.log("Esta dentro do padrão");
  } else {
    console.log("Esta fora do padrão");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const mediaQ = window.matchMedia("(max-width: 720px)");
console.log(mediaQ);

const menu = document.querySelector(".menu");

if (mediaQ.matches) {
  menu.classList.add("menu-mobile");
}
