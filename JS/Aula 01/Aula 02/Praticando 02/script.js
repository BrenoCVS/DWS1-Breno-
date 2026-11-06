function Trocar() {
    const img = document.getElementById("imagem");
    const texto = document.getElementById("paragrafo");

    img.addEventListener("mouseover", () => {
        trocaCores("white", "black", "Luz acesa", "lampada-acesa.png");
    });

    img.addEventListener("mouseout", () => {
        trocaCores("black", "white", "Luz apagada", "lampada.png");
    });

    function trocaCores(bg, c, testo, url) {
        document.body.style.backgroundColor = bg;
        document.body.style.color = c;
        texto.textContent = testo;
        img.src = url;
    }
}



document.addEventListener("DOMContentLoaded", function () {
    Trocar();
});