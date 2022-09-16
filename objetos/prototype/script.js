// Crie uma função construtora de Pessoa
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  (this.nome = nome), (this.sobrenome = sobrenome), (this.idade = idade);
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const eu = new Pessoa("Felipe", "Kucharski", 22);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// NodeList: entries, forEach, item, keys, length, values.
Object.getOwnPropertyNames(NodeList.prototype);

//HTMLCollection: item, length, namedItem
Object.getOwnPropertyNames(HTMLCollection.prototype);

//Document: muitos metodos kkkkk
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo

const li = document.querySelector("li");

li; //HTMLLIElement()
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:

li.hidden.constructor.name; //String
