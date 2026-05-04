const NOME = "Gabriel Lucas";
let tituloProfissional = "Garoto de programa / Faço de tudo";
let minhaBio = "Sou um cara esforçado (quando quero)";

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

// Data atual
let hoje = new Date();
let anoAtual = hoje.getFullYear();
let mesAtual = hoje.getMonth() + 1;
let diaAtual = hoje.getDate();

// Cálculo simples
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

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhabio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de Formatura: " + anoFormatura;

document.getElementById("tituloTempo").innerText = "Faltam " + anos + " anos, " + meses + " meses e " + dias + " dias para a formatura";