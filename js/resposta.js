class Funcionario {
  constructor(nome, salario, dataAdmissao, bonus, soma) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
    this.bonus = bonus;
  }

  // Função calcular bonus

  calcularBonus() {
    return this.salario * this.bonus;
  }

  // Função exibir detalhes

  exibirDetalhes() {
    console.log(
      `Funcionario: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, data de admissão: ${
        this.dataAdmissao
      }, o bonus implementado junto com o salário ficará de ${this.calcularBonus()}`
    );
  }
}

const funcionario = new Funcionario("Marta", 1000, "03/04/2015", 0.1);

funcionario.exibirDetalhes();

/* -------------------------------------------------------------------------------- */

class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, bonus) {
    super(nome, salario, dataAdmissao, bonus);
    this.bonus = bonus;
  }

  // Função mostrar o setor do gerente
  detalhesGerente() {
    console.log(
      `${this.nome} é gerente, foi admitido em ${
        this.dataAdmissao
      }, possui o salario de ${
        this.salario
      }, onde tem um bonus de ${this.calcularBonus()}`
    );
  }
}

// Constantes do funcionario e gerente

const gerente = new Gerente("Alcindo", 20000, "05/09/1990", 0.2);

gerente.detalhesGerente();
