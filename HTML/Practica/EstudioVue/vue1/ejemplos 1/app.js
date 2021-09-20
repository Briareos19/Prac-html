function adicionarTarea(){
   let campoTexto = document.getElementById("goal")
   let valor = campoTexto.value;
   let li1 = document.createElement("li")
   li1.textContent = valor;
   let lista = document.getElementById("tareas")
   lista.appendChild(li1);
}