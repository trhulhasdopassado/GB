const NOME = "Gabriel Lucas";
let tituloProsissional = "Garoto de programa / Faço de tudo";
let minhaBio = "Sou um cara esforçado (quando quero)";
let anoFormatura = 2028;
let anoIngresso = 2025;
let indefinido;
let nulo = null;
let curso = {
    nome: "Sistema de informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProsissional);
console.log(typeof tituloProsissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProsissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de Formatura: " + anoFormatura;
