const formulario = document.getElementById("meuFormulario");

const campos = [
    "firstName",
    "lastName",
    "username",
    "city",
    "state",
    "zip"
];

// Verifica se o campo está preenchido
function validarCampo(campo) {

    const elemento = document.getElementById(campo);

    if (elemento.value.trim() !== "") {

        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");

    } else {

        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");

    }
}

// Verifica os campos
campos.forEach(function(campo) {

    const elemento = document.getElementById(campo);

    elemento.addEventListener("input", function() {
        validarCampo(campo);
    });

    elemento.addEventListener("change", function() {
        validarCampo(campo);
    });

});

// Validação
const termos = document.getElementById("termos");

termos.addEventListener("change", function() {

    if (termos.checked) {

        termos.classList.remove("is-invalid");
        termos.classList.add("is-valid");

    } else {

        termos.classList.remove("is-valid");
        termos.classList.add("is-invalid");

    }

});

// Verificaçã
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    campos.forEach(function(campo) {
        validarCampo(campo);
    });

    if (termos.checked) {
        termos.classList.remove("is-invalid");
        termos.classList.add("is-valid");
    } else {
        termos.classList.remove("is-valid");
        termos.classList.add("is-invalid");
    }

    if (formulario.checkValidity()) {

        alert("Formulário enviado com sucesso!");

    } else {

        alert("Por favor, preencha todos os campos corretamente!");

    }

});