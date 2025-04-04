console.log("JAVA SCRIPT CONECTADO!!!");

// CLASSE - MOLDE PARA CRIAR OBJETOS
class Veiculo {
  //CONSTRUTOR - É UM MÉTODO ESPECIAL DO JAVASCRIPT
  constructor(marca, modelo) {
    // Aqui que estão dentros são os argumentos/variáveis
    // THIS - É UMA PALAVRA-CHAVE ESPECIAL, QUE SE REFERE AO PRÓPIO OBJETO CRIADO
    this.marca = marca; // É como se fosse um ID, é o método de como vamos chamar as nossas variaveis
    this.modelo = modelo;
  }
}

//OBJETO - É UMA INSTANCIA DE CLASSE.
const carro = new Veiculo("Toyota", "Corolla");
console.log(carro.marca); // A gente chama ela nessa construção aqui

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

  // MÉTODO verificarForcadaSenha ENCAPSULADO - TRADUZINDO ELE ESTA PRIVADO, APENAS OS ATRIBUTOS DENTRO DESSA CLASSE TEM ACESSO A ELE

  #verificarForcadaSenha(senha) {
    return senha.length > 6 ? true : false;
  }

  criarConta() {
    if (this.#verificarForcadaSenha(this.senha)) {
      return console.log("Conta criada!!!");
    }

    return console.log("Senha Inválida!!!");
  }
}

const user = new usuario("123456789");
user.criarConta();

/* --------------------------------------------------------------------------------- */

class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo);
    this.portas = portas;
  }

  info() {
    console.log(
      `A marca do carro é: ${this.marca}, seu modelo é: ${this.modelo} e ele possui ${this.portas} portas`
    );
  }
}

const meuCarro = new Carro("Honda", "Civic", 4);
meuCarro.info();

/* --------------------------------------------------------------------------------- */

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  mostrarDados() {
    console.log(
      `Funcionario: ${this.nome}, salário: R$${this.salario.toFixed(2)}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, tipo) {
    super(nome, salario);
    this.tipo = tipo;
  }

  mostrarSetor() {
    console.log(`${this.nome} é gerente do setor ${this.tipo}`);
  }
}

const gerente = new Gerente("Alcindo", 1000, "TI");
gerente.mostrarDados();
gerente.mostrarSetor();
