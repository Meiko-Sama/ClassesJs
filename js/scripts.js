console.log("JAVA SCRIPT CONECTADO!!!");

// CLASSE - MOLDE PARA CRIAR OBJETOS
class carro {
  //CONSTRUTOR - É UM MÉTODO ESPECIAL DO JAVASCRIPT
  constructor(marca, modelo) {
    // Aqui que estão dentros são os argumentos/variáveis
    // THIS - É UMA PALAVRA-CHAVE ESPECIAL, QUE SE REFERE AO PRÓPIO OBJETO CRIADO
    this.marca = marca; // É como se fosse um ID, é o método de como vamos chamar as nossas variaveis
    this.modelo = modelo;
  }
}

//OBJETO - É UMA INSTANCIA DE CLASSE.
const primeiroCarro = new carro("Toyota", "Corolla");
console.log(primeiroCarro.marca); // A gente chama ela nessa construção aqui

/* --------------------------------------------------------------------------------- */

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const celular = new Produto("Nokia", 1500);
const notebook = new Produto("Notebook", 5000);

console.log(
  `Nome do Produto: ${celular.nome} - Preço do Produto: ${celular.preco}`
);
console.log(
  `Nome do Produto: ${notebook.nome} - Preço do Produto: ${notebook.preco}`
);

/* --------------------------------------------------------------------------------- */

class contaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  getSaldo() {
    return `Seu saldo é: R$${this.saldo.toFixed(2)}`;
  }
}

const conta = new contaBancaria(1000);
conta.depositar(1000);
console.log(conta.getSaldo());
