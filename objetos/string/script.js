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

let valorTaxa = 0;
let valorRecebimento = 0;

transacoes.forEach((item) => {
  if (item.descricao.startsWith("Taxa")) {
    let valores = item.valor;
    valores = valores.split("R$ ")[1];
    valores = +valores;

    valorTaxa += valores;
  } else {
    let valores = item.valor;
    valores = valores.split("R$ ")[1];
    valores = +valores;

    valorRecebimento += valores;
  }
});

console.log(valorTaxa);
console.log(valorRecebimento);

// Retorne uma array com a lista abaixo
let transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

transportes = transportes.split(";");

console.log(transportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

htmlArr = html.split("span");
htmlNew = htmlArr.join("a");
console.log(htmlNew);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

// console.log(frase[frase.length - 1]);
console.log(frase.slice(-1));

// Retorne o total de taxas

transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoes1.forEach((item) => {
  let formatandoStr = item.trim().toLowerCase();
  // console.log(formatandoStr);

  if (formatandoStr.startsWith("taxa")) {
    taxasTotal++;
  }
});

console.log(taxasTotal);
