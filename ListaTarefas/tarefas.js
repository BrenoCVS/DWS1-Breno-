const campo = document.querySelector("#tarefa"); // seleção
const botao = document.querySelector("#adicionar"); // seleção
const lista = document.querySelector("#lista"); // seleção
botao.addEventListener("click", function () { // evento
 if (campo.value.trim() === "") return;
 const item = document.createElement("li");
 item.textContent = campo.value;
 item.addEventListener("dblclick", function () { // evento
 item.remove(); // alteração
 });
 lista.append(item); // alteração
 campo.value = "";
 campo.focus();
 item.addEventListener("click", function(){
    item.classList.toggle("feito");
 })
});