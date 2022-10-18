// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const liPage = document.querySelectorAll("li");

for (const makeLi of liPage) {
  makeLi.classList.add("active");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const windowPropertieValue in window) {
  console.log(`propriedade:${windowPropertieValue}\nvalor: ${window[windowPropertieValue]}`);
}
