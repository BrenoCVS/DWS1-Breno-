
function mudaFundo() {
    const fundop = localStorage.getItem("fundo");
 
    document.body.style.backgroundColor = fundop

    const p = document.getElementById("parag");
    // Primeiro texto
    p.append("A cor ");

    // Criando a tag strong
    const strong = document.createElement("strong");
    strong.textContent = fundop;

    // Inserindo o strong dentro do p
    p.append(strong);

    // Continuando o texto depois do strong
    p.append(" foi salva no LocalStorage do navegador.");



    const red = document.getElementById("r");
    const green = document.getElementById("g");
    const blue = document.getElementById("b");
    const yellow = document.getElementById("y");
    const pink = document.getElementById("p");
    const reset = document.getElementById("reset");

    let bg = fundop;

    mudaPrev(bg);

    red.addEventListener("click", function () {
        document.body.style.backgroundColor = "red";
        bg = "red";
        mudaPrev(bg);
        localStorage.setItem("fundo", "red");
        p.remove();
    });

    green.addEventListener("click", function () {
        document.body.style.backgroundColor = "green";
        bg = "green";
        mudaPrev(bg);
        localStorage.setItem("fundo", "green");
        p.remove();
    });

    blue.addEventListener("click", function () {
        document.body.style.backgroundColor = "blue";
        bg = "blue";
        mudaPrev(bg);
        localStorage.setItem("fundo", "blue");
        p.remove();
    });

    yellow.addEventListener("click", function () {
        document.body.style.backgroundColor = "yellow";
        bg = "yellow";
        mudaPrev(bg);
        localStorage.setItem("fundo", "yellow");
        p.remove();
    });

    pink.addEventListener("click", function () {
        document.body.style.backgroundColor = "pink";
        bg = "pink";
        mudaPrev(bg);
        localStorage.setItem("fundo", "pink");
        p.remove();
    });

    reset.addEventListener("click", function () {
        document.body.style.backgroundColor = "white";
        bg = "white";
        mudaPrev(bg);
        localStorage.setItem("fundo", "white");
        p.remove();
    });

    red.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = "red";
        mudaPrev("black");
    });

    red.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = bg;
        mudaPrev(bg);
    });

    green.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = "green";
        mudaPrev("black");
    });

    green.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = bg;
        mudaPrev(bg);
    });

    blue.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = "blue";
        mudaPrev("black");
    });

    blue.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = bg;
        mudaPrev(bg);
    });

    yellow.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = "yellow";
        mudaPrev("black");
    });

    yellow.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = bg;
        mudaPrev(bg);
    });

    pink.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = "pink";
        mudaPrev("black");
    });

    pink.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = bg;
        mudaPrev(bg);
    });

}

function mudaPrev(cor) {
    const prev = document.getElementById("preview");
    prev.style.color = cor;
}

document.addEventListener("DOMContentLoaded", function () {
    mudaFundo();
});
