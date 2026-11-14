const CAMPOS_ENDERECO = "#rua, #bairro, #cidade, #uf";

let ultimoCepBuscado = null;


function mostrarMensagem(texto, tipo) {
    $("#msg")
        .removeClass("text-success text-danger text-muted")
        .addClass(tipo === "sucesso" ? "text-success" : tipo === "erro" ? "text-danger" : "text-muted")
        .text(texto);
}

function limparEndereco() {
    $(CAMPOS_ENDERECO).val("").prop("disabled", true);
}

function erroDeCep(mensagem) {
    const erro = new Error(mensagem);
    erro.erroDeCep = true;
    return erro;
}


async function buscarCep() {
    const cep = $("#cep").val().replace(/\D/g, "");

    if (cep.length === 0) {
        ultimoCepBuscado = null;
        limparEndereco();
        mostrarMensagem("", "info");
        return;
    }

    if (cep.length !== 8) {
        ultimoCepBuscado = null;
        limparEndereco();
        mostrarMensagem("O CEP precisa ter 8 dígitos.", "erro");
        return;
    }

    if (cep === ultimoCepBuscado) return;
    ultimoCepBuscado = cep;

    limparEndereco();
    mostrarMensagem("Buscando...", "info");

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw erroDeCep("CEP inválido.");

        const dados = await response.json();
        if (dados.erro) throw erroDeCep("CEP não encontrado.");
        if (cep !== ultimoCepBuscado) return;

        $("#rua").val(dados.logradouro);
        $("#bairro").val(dados.bairro);
        $("#cidade").val(dados.localidade);
        $("#uf").val(dados.uf);
        $(CAMPOS_ENDERECO).prop("disabled", false);

        mostrarMensagem("Endereço encontrado!", "sucesso");
    } catch (erro) {
        if (cep !== ultimoCepBuscado) return;

        ultimoCepBuscado = null; 
        limparEndereco();

        mostrarMensagem(
            erro.erroDeCep ? erro.message : "Sem conexão. Verifique sua internet e tente novamente.",
            "erro"
        );
    }
}


function preenche() {
    $("#nome").focus();

    $("#cep").on("blur", buscarCep);

    $("#cep").on("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            buscarCep();
        }
    });

    $("#cep").on("input", function () {
        ultimoCepBuscado = null;
        limparEndereco();
        mostrarMensagem("", "info");
    });

    $("#cadastro").on("submit", function (event) {
        event.preventDefault();
        mostrarMensagem("Cadastro enviado!", "sucesso");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    preenche();
});