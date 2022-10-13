// const cep = fetch("https://viacep.com.br/ws/01001000/json/");

// cep
//   .then((resolucao) => {
//     return resolucao.json();
//   })
//   .then((body) => {
//     const div = document.body.querySelector(".conteudo");
//     div.innerText = body.logradouro;
//   });

// const color = fetch("./style.css");

// color
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((css) => {
//     const style = document.createElement("style");
//     style.innerHTML = css;
//     console.log(style);
//     document.head.appendChild(style);
//   });

// const image = fetch("./img.png");

// image
//   .then((resolucao) => {
//     return resolucao.blob();
//   })
//   .then((body) => {
//     const imageUrl = URL.createObjectURL(body);
//     const imgElement = document.querySelector("img");
//     imgElement.src = imageUrl;
//     imgElement.style.width = 500 + "px";
//   });

///////////////////// EXERCICIOS //////////////////////////////////////

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const formulario = document.querySelector("#form-cep");
const enviar = document.querySelector("#btn");

function envio(e) {
  e.preventDefault();
  CEP = formulario[0].value;

  const cep = fetch(`https://viacep.com.br/ws/${CEP}/json/`);

  cep
    .then((r) => {
      return r.text();
    })
    .then((texto) => {
      const infoCep = document.querySelector(".info-cep");
      infoCep.innerText = texto;
    });
}

enviar.addEventListener("click", envio);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// setInterval(() => {
//   const bitcoin = fetch("https://blockchain.info/ticker");

//   bitcoin
//     .then((r) => {
//       return r.json();
//     })
//     .then((coin) => {
//       const infoBitcoin = document.querySelector(".info-bitcoin");
//       infoBitcoin.innerText = coin.BRL.buy;
//     });
// }, 30000);

function attBitcoin() {
  const bitcoin = fetch("https://blockchain.info/ticker");

  bitcoin
    .then((r) => {
      return r.json();
    })
    .then((coin) => {
      const infoBitcoin = document.querySelector(".info-bitcoin");
      infoBitcoin.innerText = `valor do bitcoin: ${coin.BRL.buy}`;
    });
}

attBitcoin();

setInterval(attBitcoin, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btn = document.querySelector(".change-joke");

function changeJoke() {
  const chuckNorris = fetch("https://api.chucknorris.io/jokes/random");

  chuckNorris
    .then((r) => {
      return r.json();
    })
    .then((joke) => {
      const infoJoke = document.querySelector(".info-joke");
      infoJoke.innerText = joke.value;
    });
}

changeJoke();

btn.addEventListener("click", changeJoke);
