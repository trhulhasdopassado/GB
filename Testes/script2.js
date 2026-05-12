let projetos = [];

// cria um projeto como objeto
function criarProjeto() {
    return {
        nome: prompt("Nome do projeto:"),
        tecnologias: prompt("Tecnologias usadas:"),
        conhecimentos: prompt("Conhecimentos necessários:"),
        descricao: prompt("Descrição do projeto:"),
    };
}

function adicionarProjeto() {
    projetos.push(criarProjeto());
    mostrarLista();
}

function adicionarFinal() {
    projetos.push(criarProjeto());
    mostrarLista();
}

function adicionarInicio() {
    projetos.unshift(criarProjeto());
    mostrarLista();
}

function tirarUltimo() {
    projetos.pop();
    mostrarLista();
}

function tirarPrimeiro() {
    projetos.shift();
    mostrarLista();
}

function mostrarProjeto() {
    let numero = document.getElementById("numero").value;

    let projeto = projetos[numero - 1];

    if (projeto) {
        document.getElementById("resultado").innerHTML = `
            <strong>Nome:</strong> ${projeto.nome} <br>
            <strong>Tecnologias:</strong> ${projeto.tecnologias} <br>
            <strong>Conhecimentos:</strong> ${projeto.conhecimentos} <br>
            <strong>Descrição:</strong> ${projeto.descricao} <br>
        `;
    } else {
        document.getElementById("resultado").innerHTML =
            "Posição inválida!";
    }
}

function mostrarLista() {
    document.getElementById("lista").innerHTML =
        projetos.map((p, i) => `${i + 1}. ${p.nome}`).join("<br>");
}