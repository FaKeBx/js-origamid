// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let soma = 0;
transacoes.forEach((item) => {
  let valores = item.valor;
  valores = valores.split("R$ ")[1];
  valores = +valores;

  soma += valores;

  // console.log(valores);
  // console.log(soma);
});

// Retorne uma array com a lista abaixo
let transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

transportes = transportes.split(";");

// console.log(transportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

htmlArr = html.split("span");
console.log(htmlArr);
htmlNew = htmlArr.join("a");
console.log(htmlNew);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase[frase.length - 1]);

// Retorne o total de taxas

transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

console.log();
