window.onload=iniciar;
var tareas=[];

function iniciar(){
    var btnAgregar=document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)
}

function clickBtnAgregar(){
    var issue=document.getElementById("txtTareas").value;
    tareas.push(issue);
    //alert(tareas);
    mostrarTareas();
}
//debugger;
function mostrarTareas(){
    var listado=document.getElementById("listado")
    var html = "";
    for (var tarea of tareas) {
        //alert(tarea);
        html += tarea +"<br/>"
    }

    listado.innerHTML=html;
    console.log(html);

    //alert(tareas);
}

