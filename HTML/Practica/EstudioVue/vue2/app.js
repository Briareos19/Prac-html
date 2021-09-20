function adicionarTarea(){
   let input_value = document.getElementById("goal").value;
   let new_li = document.createElement("li");
   new_li.textContent = input_value;
   let ul_tareas = document.getElementById("tareas");
   ul_tareas.append(new_li);
}