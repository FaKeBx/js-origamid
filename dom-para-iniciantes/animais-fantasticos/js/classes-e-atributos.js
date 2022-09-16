// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].setAttribute("class", "ativo");

console.log(itensMenu);

// Verifique se as imagens possuem o atributo alt

const verificaAlt = document.querySelectorAll("img");

verificaAlt.forEach((item) => {
  item.hasAttribute("alt");
});

console.log(verificaAlt);

// Modifique o href do link externo no menu

const linkExterno = document.querySelectorAll('.menu [href^="http"]');

linkExterno.forEach((item) => {
  item.setAttribute("href", "https://fakebx.github.io/");
});

console.log(linkExterno);
