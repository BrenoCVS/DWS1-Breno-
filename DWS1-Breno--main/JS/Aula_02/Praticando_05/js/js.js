
// Seleciona todos os quadrados
const quadrados = document.querySelectorAll(".quadrado");

// Quadrado atualmente selecionado
let selecionado = null;

// Distância de movimentação
const velocidade = 15;

// Posição de cada quadrado
let posicaoX = 0;
let posicaoY = 0;

// Selecionar e desselecionar quadrados
quadrados.forEach(function(quadrado) {

    quadrado.addEventListener("click", function() {

        // Se clicar no quadrado que já está selecionado
        if (selecionado === quadrado) {

            quadrado.classList.remove("selecionado");

            // Volta para a posição original
            posicaoX = 0;
            posicaoY = 0;

            quadrado.style.transform = "translate(0px, 0px)";

            selecionado = null;

            return;
        }

        // Se outro quadrado já estiver selecionado
        if (selecionado !== null) {

            alert("Já existe um quadrado selecionado! Desselecione-o primeiro.");

            return;
        }

        // Seleciona o quadrado
        selecionado = quadrado;

        posicaoX = 0;
        posicaoY = 0;

        quadrado.classList.add("selecionado");

    });

});

// Movimentação dos quadrados
document.addEventListener("keydown", function(event) {

    // Verifica se existe um quadrado selecionado
    if (selecionado === null) {
        return;
    }

    const tecla = event.key.toLowerCase();

    let movimentoX = 0;
    let movimentoY = 0;

    // Verifica qual tecla foi pressionada
    switch (tecla) {

        // W ou seta para cima
        case "w":
        case "arrowup":
            movimentoY = -velocidade;
            break;

        // A ou seta para esquerda
        case "a":
        case "arrowleft":
            movimentoX = -velocidade;
            break;

        // S ou seta para baixo
        case "s":
        case "arrowdown":
            movimentoY = velocidade;
            break;

        // D ou seta para direita
        case "d":
        case "arrowright":
            movimentoX = velocidade;
            break;

        default:
            return;
    }

    // Evita a rolagem da página com as setas
    event.preventDefault();

    // Pega a posição atual do quadrado
    const retangulo = selecionado.getBoundingClientRect();

    // Calcula a nova posição
    let novaX = posicaoX + movimentoX;
    let novaY = posicaoY + movimentoY;

    // Limita a movimentação dentro da tela
    const limiteEsquerdo = -retangulo.left + posicaoX;
    const limiteDireito = window.innerWidth - retangulo.right + posicaoX;

    const limiteSuperior = -retangulo.top + posicaoY;
    const limiteInferior = window.innerHeight - retangulo.bottom + posicaoY;

    novaX = Math.max(limiteEsquerdo, Math.min(novaX, limiteDireito));
    novaY = Math.max(limiteSuperior, Math.min(novaY, limiteInferior));

    // Atualiza a posição
    posicaoX = novaX;
    posicaoY = novaY;

    selecionado.style.transform =
        "translate(" + posicaoX + "px, " + posicaoY + "px)";

});
