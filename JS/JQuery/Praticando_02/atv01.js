
function mudaFundo() {
    let fundop = localStorage.getItem("fundo");
 
    console.log(fundop);
    
    $("body").css("background-color", fundop);
    $("#parag").append("A cor <strong>" + fundop + " </strong> foi salva no Local Storage")
    $("#preview").hide();

    $("#r, #g, #b, #y, #p, #reset").on("click", function(){
        const cor = $(this).data("cor");
        $("body").css("background-color", cor);
        localStorage.setItem("fundo", cor);
        fundop = cor;
        $("#parag").hide();
    });

    $("#r, #g, #b, #y, #p").on("mouseover", function(){
        const cor = $(this).data("cor");
        $("body").css("background-color", cor);
        $("#preview").show();
        
    });

    $("#r, #g, #b, #y, #p, #reset").on("mouseout", function(){
        $("body").css("background-color", fundop);
        $("#preview").hide();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    mudaFundo();
});
