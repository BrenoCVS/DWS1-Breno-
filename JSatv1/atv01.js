
function PegaNome () {
    const nome = prompt("Qual o seu nome?");

    if(nome == null || nome == ""){
        nome = "Visitante";
    }

    const body = document.querySelector("body"); // seleção
    const titulo = document.createElement("h1");
    const paragrafo = document.createElement("p");

    titulo.textContent = "Praticando 01 - JS";
    paragrafo.textContent = "Seja bem vindo ".nome;
}

document.addEventListener("DOMContentLoaded", function () {
    PegaNome();
});