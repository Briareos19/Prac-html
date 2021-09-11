//objeto se crea con corchetes
// puede ser visto como un diccionario
/*
var persona={
    "nombre":"Jhon",
    "apellido":"Cardona",
    "telefono":"3167308590",
    "email":"hecantoque@gmail.com",
    "empleo":{
        "nombre":"programador",
        "localidad":"Colombia"
    }   
}

console.log(persona);
alert(persona.apellido)

//cambiar el valor
persona.email="no tiene";
alert(persona.email);

alert(persona.empleo.nombre);

*/

window.onload=iniciar;
var personas=[];

function iniciar(){
    var btnAgregar=document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
}

function clickBtnAgregar(){
    alert("me presionaste");
    var nombre=document.getElementById("txtNombre").value;
    var apellido=document.getElementById("txtApellido").value;
    var telefono=document.getElementById("txtTelefono").value;
    var email=document.getElementById("txtEmail").value;

    var persona={
        "nombre":nombre,
        "apellido":apellido,
        "telefono":telefono,
        "email":email,  
    }
    personas.push(persona);
    showPerson();
}

function showPerson(){
    var listado=document.getElementById("listado");
    html="";
    for (var person of personas) {
        html += person.nombre +' '+ person.apellido +' '+person.telefono +' '+ person.email + "<br/>";
    }
    listado.innerHTML=html;
}