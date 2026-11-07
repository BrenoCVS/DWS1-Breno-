
function Conta () {
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let soma = document.getElementById("soma");
    let subtracao = document.getElementById("subtracao");
    let multiplicacao = document.getElementById("multiplicacao");
    let divisao = document.getElementById("divisao");
    let resultado = document.getElementById("resultado");

        soma.addEventListener("click", function () {
            console.log(n1.value);
            console.log(n2.value);
            let result = parseFloat(n1.value) + parseFloat(n2.value);
            console.log(result);
            resultado.value = result;
        
        });

        subtracao.addEventListener("click", function () {
            let result = parseFloat(n1.value) - parseFloat(n2.value);
            resultado.value = result;
        });

        multiplicacao.addEventListener("click", function () {
            let result = parseFloat(n1.value) * parseFloat(n2.value);
            resultado.value = result;
        });

        divisao.addEventListener("click", function () {
            let result = parseFloat(n1.value) / parseFloat(n2.value);
            resultado.value = result;
        });

   }


document.addEventListener("DOMContentLoaded", function () {
    Conta();
});