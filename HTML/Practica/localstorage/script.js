window.onload=iniciar;

function iniciar(){
    var btnAgregar=document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);

    var btnBorrar=document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar);

    mostarNotas();
}

function clickBtnAgregar(){
    alert("click")
    var txtNota=document.getElementById("txtNota").value;

    var notas=[];
    if (localStorage.notas) {
        notas=JSON.parse(localStorage.notas);
    }

   
    notas.push(txtNota);
    
    localStorage.notas=JSON.stringify(notas);
    mostarNotas();
}

function clickBtnBorrar(){
    localStorage.clear();
    mostarNotas();
}

function mostarNotas(){
    var listado=document.getElementById("listado");
    
    var notas=[];
    if (localStorage.notas) {
        notas=JSON.parse(localStorage.notas);
    }

    var html="";

    for (var nota of notas) {
        html+=nota + "<br/>";
    }

    listado.innerHTML=html;
}
