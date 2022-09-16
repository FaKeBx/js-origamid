// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const copyMenu = menu.cloneNode(true);

copy.appendChild(copyMenu);

// Selecione o primeiro DT da dl de Faq

const dl = document.querySelector("dl");

const dt = dl.firstElementChild;

// Selecione o DD referente ao primeiro DT

const dd = dt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector(".faq");

const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
