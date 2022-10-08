// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function changeColor() {
  document.body.classList.toggle("active");
}

// setInterval(changeColor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const span = document.querySelector("span");
const play = document.querySelector("[data-play]");
const pause = document.querySelector("[data-pause]");
const reset = document.querySelector("[data-reset]");

let time = 0;
let timer;

function initCronos() {
  timer = setInterval(() => {
    span.innerText = time++;
  }, 1000);
  play.setAttribute("disabled", "");
}

play.addEventListener("click", initCronos);

function pauseCronos() {
  clearInterval(timer);
  play.removeAttribute("disabled");
}

pause.addEventListener("click", pauseCronos);

function resetCronos() {
  time = 0;
}

pause.addEventListener("dblclick", resetCronos);
reset.addEventListener("click", resetCronos);
