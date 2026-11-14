let contador = 1;
const enderecoImagem = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300";

$("#esquerdo").on("click", () => {
    altera($("#esquerdo"), $("#direito"), "direita", "esquerda");
});

$("#direito").on("click", () => {
    altera($("#direito"), $("#esquerdo"), "esquerda", "direita");
});

function altera(prim, outher, classe, outherclasse){
    $("#conteudo").removeClass(classe);
    $("#conteudo").addClass(outherclasse);
    prim.addClass("btn-primary");
    prim.removeClass("btn-outline-primary");
    $(outher).removeClass("btn-primary");
    $(outher).addClass("btn-outline-primary");
};

// Adicionar parágrafo
    $("#adicionarP").on("click", function() {
    const novoParagrafo = $("<p></p>");
    novoParagrafo.text("#" + contador + " - Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    $("#paragrafos").append(novoParagrafo);
    contador++;
});

// Remover primeiro parágrafo
$("#removerPrimeiro").on("click", function(){
    $("#paragrafos").children().first().remove();
});

// Remover último parágrafo
$("#removerUltimo").on("click", function(){
    $("#paragrafos").children().last().remove();
});

// Remover todos os parágrafos
$("#removerTodosP").on("click", function(){
    $("#paragrafos").empty();
    contador=1;
});

// Adicionar imagem
$("#adicionarI").on("click", function(){
    const newImage = $("<img>");
    newImage.attr("src", enderecoImagem);
    newImage.attr("alt", "Gato");
    $("#imagens").append(newImage);
});

// Remover uma imagem
$("#removerUma").on("click", function(){
    $("#imagens").children().first().remove();
});

// Remover todas as imagens
$("#removerTodasI").on("click", function(){
    $("#imagens").empty();
});