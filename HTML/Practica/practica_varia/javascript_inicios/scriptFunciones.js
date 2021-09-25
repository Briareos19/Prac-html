

function calcularSuperficie(){
    alert("Prueba de funcion");
    var ancho=10;
    var alto=15;

    var resultado=ancho*alto;
    alert(resultado);
}

function calcularSuperficie2(ancho, alto){
    var resultado=ancho*alto;
    alert(resultado);
}

function calcularSuperficie3(ancho, alto){
    var resultado=ancho*alto;
    return resultado;
}

calcularSuperficie();
calcularSuperficie2(10, 15);
var superficieTerreno=calcularSuperficie3(8, 9);
alert("la superficie del terreno es " + superficieTerreno)