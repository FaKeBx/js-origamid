// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = "blue", color = "red", texto = "texto", border = "none") {
  const buttonElement = document.createElement("button");
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  buttonElement.style.border = border;
  buttonElement.innerText = texto;
  return buttonElement;
}

const redButton = createButton("#84e", "gold");
const brasilButton = createButton("green", "gold", "Brasil campeão da copa do mundo 2022!!!");
document.body.appendChild(redButton);
document.body.appendChild(brasilButton);

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["Pizza", "Batata"];

comidas.push(...frutas);

console.log(comidas);
