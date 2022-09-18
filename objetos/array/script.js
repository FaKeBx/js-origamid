// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];

const var1 = comidas.shift();
console.log(var1);

const var2 = comidas.pop();
console.log(var2);

comidas.push("Arroz");
console.log(comidas);

comidas.unshift("Peixe", "Batata");
console.log(comidas);

// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];

const ordemEstudantes = estudantes.sort().reverse();
const joana = ordemEstudantes.includes("Joana");
const Juliana = ordemEstudantes.includes("Juliana");
console.log(ordemEstudantes);
console.log(joana);
console.log(Juliana);

// Substitua section por ul e div com li,
// utilizando split e join

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

const htmlLimpa = html.split("section").join("ul").split("div").join("li");
console.log(htmlLimpa);

// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros = ["Ford", "Fiat", "VW", "Honda"];

const arrSalva = carros.slice();

carros.pop();
console.log(carros);

console.log(arrSalva);
