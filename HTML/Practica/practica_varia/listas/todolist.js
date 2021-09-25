window.onload=iniciar;
 
//var nombres=["jhon", "jairo", "cardona", "Osorno"];
/*
alert(nombres);
alert(nombres[2]);

//arreglo vacio
var apellidos=[];

//agregar por indice
apellidos[0]="Escudero";

//agregar sin saber el indice
apellidos.push("Espinoza");

alert(apellidos);
*/
/*
for (let i = 0; i < nombres.length; i++) {
    var nombre = nombres[i];
    alert(nombre);
}
*/
//forma simplificada de recorrer la lista
/*
for (var nombre of nombres) {
    alert(nombre);
}
*/
//variable por fuera, ya que las que estan dentro de la funcion
//mueren despues de ser utilizadas
var tareas=[];

function iniciar(){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
    
}

function clickBtnAgregar(){
    //alert("se agrego correctamente");
    var tarea=document.getElementById("txtTareas").value;
    //alert("se agrego correctamente la tarea "+ tarea);
    tareas.push(tarea);
    alert(tareas);
}
