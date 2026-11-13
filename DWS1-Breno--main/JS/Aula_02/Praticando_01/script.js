function Mostra() {
    const btnMostra = document.getElementById("mostrar");
    const btnEsconde = document.getElementById("ocultar");
    const div = document.getElementById("div1");

    if (btnMostra) {
        btnMostra.style.position = "relative"; 
    }

    if (btnMostra) {
        btnMostra.addEventListener("mouseover", (e) => {
            console.log("Ctrl pressionado", e.ctrlKey);
            if (!e.ctrlKey) {
                foge();
            }
        });
        btnMostra.addEventListener("mouseout", volta);
        
        btnMostra.addEventListener("click", mostrar);
    }

    
        btnEsconde.addEventListener("click", esconder);
    

    function mostrar() {
        div.style.backgroundColor = "aquamarine";
        div.style.color = "black";
    }

    function esconder() {
        div.style.backgroundColor = "white";
        div.style.color = "white"; 
    }

    function foge() {
        btnMostra.style.top = "80px";
        btnMostra.style.left = "120px";
    }

    function volta() {
        btnMostra.style.top = "0px";
        btnMostra.style.left = "0px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    Mostra();
});