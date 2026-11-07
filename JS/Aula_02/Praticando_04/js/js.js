
// Elementos
const paragrafos = document.getElementById("paragrafos");
const imagens = document.getElementById("imagens");
const conteudo = document.getElementById("conteudo");

// Contador
let contador = 1;

// Imagem que será adicionada
const enderecoImagem = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300";

// Botão Esquerdo
document.getElementById("esquerdo").addEventListener("click", function() {

    conteudo.classList.remove("direita");

    this.classList.add("btn-primary");
    this.classList.remove("btn-outline-primary");

    document.getElementById("direito").classList.remove("btn-primary");
    document.getElementById("direito").classList.add("btn-outline-primary");

});

// Botão Direito
document.getElementById("direito").addEventListener("click", function() {

    conteudo.classList.add("direita");

    this.classList.add("btn-primary");
    this.classList.remove("btn-outline-primary");

    document.getElementById("esquerdo").classList.remove("btn-primary");
    document.getElementById("esquerdo").classList.add("btn-outline-primary");

});

// Adicionar parágrafo
document.getElementById("adicionarP").addEventListener("click", function() {

    const novoParagrafo = document.createElement("p");

    novoParagrafo.textContent = "#" + contador + " - Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    paragrafos.appendChild(novoParagrafo);

    contador++;

});

// Remover primeiro parágrafo
document.getElementById("removerPrimeiro").addEventListener("click", function() {

    if (paragrafos.firstElementChild) {
        paragrafos.firstElementChild.remove();
    }

});

// Remover último parágrafo
document.getElementById("removerUltimo").addEventListener("click", function() {

    if (paragrafos.lastElementChild) {
        paragrafos.lastElementChild.remove();
    }

});

// Remover todos os parágrafos
document.getElementById("removerTodosP").addEventListener("click", function() {

    paragrafos.innerHTML = "";

});

// Adicionar imagem
document.getElementById("adicionarI").addEventListener("click", function() {

    const novaImagem = document.createElement("img");

    novaImagem.src = enderecoImagem;
    novaImagem.alt = "Gato";

    imagens.appendChild(novaImagem);

});

// Remover uma imagem
document.getElementById("removerUma").addEventListener("click", function() {

    if (imagens.firstElementChild) {
        imagens.firstElementChild.remove();
    }

});

// Remover todas as imagens
document.getElementById("removerTodasI").addEventListener("click", function() {

    imagens.innerHTML = "";

});
