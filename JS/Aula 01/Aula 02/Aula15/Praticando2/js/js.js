
const lampada = document.getElementById("lampada");
const texto = document.getElementById("texto");

// Passar o mouse: ligar lâmpada
lampada.addEventListener("mouseover", function() {
    lampada.src = "img/lampada-acesa.png";

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    texto.innerHTML = "Lâmpada acesa";
});

// Retirar o mouse: desligar lâmpada
lampada.addEventListener("mouseout", function() {
    lampada.src = "img/lampada.png";

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    texto.innerHTML = "Lâmpada apagada";
});
