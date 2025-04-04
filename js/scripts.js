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

/* --------------------------------------------------------------------------------- */

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  //MÉTODOS - SAO FUNCOES DENTRO DE UMA CLASSE, SERVEM PARA EXECUTAR AÇOES OU MANIPULAR OS ATRIBUTOS!
  apresentacao() {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos!`;
  }
}

const minhaApresentacao = new Pessoa("Thayna", 17);
console.log(minhaApresentacao.apresentacao());

/* --------------------------------------------------------------------------------- */

class Steam {
  #saldo;

  constructor(saldoInicialSteam) {
    this.#saldo = saldoInicialSteam;
  }

  depositarValorSteam(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O depósito é invalido");
    }
  }
  getSaldoSteam() {
    return `Seu saldo na Steam é de ${this.#saldo}`;
  }
}

const steam = new Steam(1000);
steam.depositarValorSteam(300);
console.log(steam.getSaldoSteam());

/* --------------------------------------------------------------------------------- */

class usuario {
  constructor(senha) {
    this.senha = senha;
  }

  #verificarForcadaSenha(senha) {
    return senha.length > 6 ? true : false;
  }

  criarConta(senha) {
    if (this.#verificarForcadaSenha(this.senha)) {
      return console.log("Conta criada!!!");
    }

    return console.log("Senha Inválida!!!");
  }
}

const user = new usuario("123456789");
user.criarConta();
