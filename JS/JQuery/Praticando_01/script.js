function Mostra() {
    
    $("#mostra").on("click", function (){
        $("#div1").show();
    });

    $("#esconde").on("click", function (){
        $("#div1").hide();
    });

    $("#alterna").on("click", function (){
        $("#div1").toggle();
    });


}

document.addEventListener("DOMContentLoaded", function () {
    Mostra();
});