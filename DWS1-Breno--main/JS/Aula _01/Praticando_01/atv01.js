
function PegaNome () {

    
    let nome = prompt("Qual o seu nome?");

    if(nome === null || nome === ""){
        nome = "Visitante";
    }

    const body = document.querySelector("body"); 
    const titulo = document.createElement("h1");
    const paragrafo = document.createElement("p");
    const negrito = document.createElement("strong");

    titulo.textContent = "Praticando 01 - JS";
    paragrafo.textContent = "Seja bem vindo ";

    negrito.textContent = nome;
    paragrafo.appendChild(negrito);

    body.appendChild(titulo);
    body.appendChild(paragrafo);

    const button1 = document.createElement("button");
    const br = document.createElement("br");
    const button2 = document.createElement("button");
    const div = document.createElement("div");


    button1.textContent = "Adicionar um parágrafo (texto de lorem ipum)";
    button2.textContent = "Apagar todos os paragrafos";


    body.appendChild(button1);
    body.appendChild(br);
    body.appendChild(button2);
    body.appendChild(div);

    button1.addEventListener("click", function () {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        div.appendChild(novoParagrafo);
    });

    button2.addEventListener("click", function () {
        const paragrafos = div.querySelectorAll("p");
        paragrafos.forEach(function (p) {
            div.removeChild(p);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    PegaNome();
});