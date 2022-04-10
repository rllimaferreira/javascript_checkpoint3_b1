// Houser: Rodrigo Ferreira
// Curso: Certified Tech Developer
// Bimestre: 1
// Disciplina: Programação Imperativa
// Professor: Lucas Feitosa
// Linguagem: Javascript (Vanilla)

/*
Passos 1 e 2 (1,5 pontos + 1,5 pontos)
Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).
Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.
*/

function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;

  // Passo 2:
  this.calcularMedia = function () {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma = soma + this.notas[i];
    }
    return soma / this.notas.length;
  };

  this.adicionarFalta = function () {
    let faltasTotal = 0;
    faltasTotal = this.faltas + 1;
    return faltasTotal;
  };
}

const aluno1 = new Aluno("Paulo", 2, [8, 6, 3, 10]);
const aluno2 = new Aluno("Laura", 1, [5, 10, 9, 8]);
const aluno3 = new Aluno("João", 1, [5, 2, 9, 5]);
const aluno4 = new Aluno("Maria", 1, [5, 7, 8, 8]);
const aluno5 = new Aluno("Sophia", 7, [3, 5, 2, 10]);

// Teste para os métodos de média e de faltas

console.log("Teste do aluno 1");
console.log(aluno1.calcularMedia());
console.log(aluno1.adicionarFalta());
console.log("Teste do aluno 5");
console.log(aluno5.calcularMedia());
console.log(aluno5.adicionarFalta());

/*
Passo 3 (1,5 pontos)
Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
*/

let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

let curso = {
  nomeCurso: "Programação Imperativa",
  notaAprovacao: 7,
  faltasMaximas: 2,
  listaEstudantes: alunos,

/*
Passo 4 (1,5 pontos)
Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

  criarAluno: function (nome, faltas, notas) {
    alunos.push(new Aluno(nome, faltas, notas));
    console.log("Aluno adicionado com sucesso.");
    return this.criarAluno;
  },

/*
Passo 5 (2 pontos)
Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que faltas máximas. Se tiver a mesma quantidade de faltas permitidas, tem que estar 10% acima da nota de aprovação.
*/

  consultaAlunoAprovacao: function (aluno) {
    if (
      aluno.calcularMedia() >= this.notaAprovacao &&
      aluno.faltas < this.faltasMaximas
    ) {
      return true;
    }
    if (
      aluno.faltas === this.faltasMaximas &&
      aluno.calcularMedia() > this.notaAprovacao + this.notaAprovacao * 0.1
    ) {
      return true;
    } else {
      return false;
    }
  },

/*
Passo 6 (2 pontos)
Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
*/

  resultadoBoleanAluno: function () {
    let resultado = [];
    for (let i = 0; i < this.listaEstudantes.length; i++) {
      let aluno = this.listaEstudantes[i].nome;
      resultado.push(aluno);
      resultado.push(this.consultaAlunoAprovacao(this.listaEstudantes[i]));
    }
    return resultado;
  },
};

console.log(curso.criarAluno("Lucas", 0, [10, 7, 8, 9]));
console.log('Os resultados booleanos abaixo representam quem foram os alunos aprovados (estão como true) ou reprovados (estão como false):', curso.resultadoBoleanAluno());