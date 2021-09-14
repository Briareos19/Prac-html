
//

function mostrarAlerta(){
    alert("tiempo completo");
}

var mostrarMensaje=function(){alert("mensaje despues de 5 seg");}

//tambien podria obviarse las llaves si tienen una linea de codigo

//mostrarAlertaMas=() =>{alert("un ultimo mensaje");}
mostrarAlertaMas=() =>alert("un ultimo mensaje");


setTimeout(mostrarAlerta, 3000);
setTimeout(mostrarMensaje, 3000);
setTimeout(mostrarAlertaMas, 7000);

// igual para aqui, si solo tiene una line a de codigo se puede obviar las llaves
setTimeout(()=>alert("uno mas para el final"), 10000);

//para intervalos de tiempo
var timer=setInterval(()=>alert("yo de nuevo"), 1000)

setTimeout(()=>{clearInterval(timer);}, 10*1000);

