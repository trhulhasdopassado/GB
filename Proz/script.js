const NOME = "Gabriel Lucas";
let tituloProfissional = "Garoto de programa (Faço de tudo)";
let minhaBio = "Sou um cara esforçado (quando quero)";

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

// Data atual
let hoje = new Date();
let anoAtual = hoje.getFullYear();
let mesAtual = hoje.getMonth() + 1;
let diaAtual = hoje.getDate();

// Cálculo
let anos = anoFormatura - anoAtual;
let meses = mesFormatura - mesAtual;
let dias = diaFormatura - diaAtual;

if (dias < 0) {
    dias = dias + 30;
    meses = meses - 1;
}

if (meses < 0) {
    meses = meses + 12;
    anos = anos - 1;
}

document.getElementById("tempoRestanteParaFormatura").innerText = "Faltam " + anos + " anos, " + meses + " meses e " + dias + " dias para a formatura";

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhabio").innerText = minhaBio;
document.getElementById("tempoRestanteFormaturaTitulo").innerText = "Tempo restante para formatura:";
document.getElementById("anoFormatura").innerText = "Ano de Formatura: " + anoFormatura;

/* feito em sala

 if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura2").innerText = '-';
} else if (anoFormatura - anoAtual === 1){
    document.getElementById("tempoRestanteParaFormatura2").innerText = `Tempo Resntante para formatura: ${anoFormatura - anoAtual} ano`;
}
 else {
    document.getElementById("tempoRestanteParaFormatura2").innerText = `Tempo Resntante para formatura: ${anoFormatura - anoAtual} anos`;
}

let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

if(diasRestantes <= 0 && mesesRestantes <= 0 && anosRestantes <= 0) {
    document.getElementById("tempoRestanteParaFormatura2").innerText = 'Curso Concluído!'
}
*/

// Nota
let nota = 8;
let aprovado = (nota >=6)? "Aprovado" : "Reprovado";

/* Como escrever no html pelo js:
document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);
*/
let diaEscrito;
let diaSemana = hoje.getDay() +1;
switch (diaSemana){
    case 1: diaEscrito = "Domingo"; break;
    case 2: diaEscrito = "Segunda"; break;
    case 3: diaEscrito = "Terça"; break;
    case 4: diaEscrito = "Quarta"; break;
    case 5: diaEscrito = "Quinta"; break;
    case 6: diaEscrito = "Sexta"; break;
    case 7: diaEscrito = "Sabado"; break;
    default: diaEscrito = "Dia inválido";
} 

document.getElementById("diaDaSemana").innerText = "Hoje é: " + diaEscrito

const btnHomem        = document.getElementById("btn-homem");
const btnMulher       = document.getElementById("btn-mulher");
const btnAtraiHomem   = document.getElementById("btn-atrai-homem");
const btnAtraiMulher  = document.getElementById("btn-atrai-mulher");

const perguntaGenero  = document.getElementById("pergunta-genero");
const perguntaAtracao = document.getElementById("pergunta-atracao");
const resultadoQuiz   = document.getElementById("resultado-quiz");

let genero = "";
let atracao = "";

// -------- GÊNERO --------
btnHomem.addEventListener("click", function() {
  genero = "homem";
  perguntaGenero.textContent = "Você é biologicamente considerado: Homem";
  exibirResultado();
});

btnMulher.addEventListener("click", function() {
  genero = "mulher";
  perguntaGenero.textContent = "Você é biologicamente considerado: Mulher";
  exibirResultado();
});

// -------- ATRAÇÃO --------
btnAtraiHomem.addEventListener("click", function() {
  atracao = "homem";
  perguntaAtracao.textContent = "Se você gosta de: Homem";
  exibirResultado();
});

btnAtraiMulher.addEventListener("click", function() {
  atracao = "mulher";
  perguntaAtracao.textContent = "Se você gosta de: Mulher";
  exibirResultado();
});

// -------- RESULTADO --------
function exibirResultado() {
  if (!genero || !atracao) return;

  let resultado = "";

  if (genero === atracao) {
    resultado = "Você é Homossexual";
  } else {
    resultado = "Você é Heterossexual";
  }

  resultadoQuiz.innerHTML = `<strong>${resultado}</strong>`;
  resultadoQuiz.style.backgroundColor = "#eee";
  resultadoQuiz.style.padding = "12px";
  resultadoQuiz.style.borderRadius = "8px";
  resultadoQuiz.style.marginTop = "10px";
}