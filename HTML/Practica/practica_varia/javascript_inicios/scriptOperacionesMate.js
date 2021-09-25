// operaciones = + - / *
// en ingles no se usa comas para los decimales, sino el punto

//var estatura=prompt("ingrese estatura");
//var peso=prompt("imprese peso");

//var IMC=estatura/peso

//alert("su indice de masa corporal es " + IMC)

/* var contador=0;
contador++;
contador--;
contador+=10;
contador-=10;
contador*=2;
contador/=2;


alert(contador); */

var edad=prompt("ingrese edad");
var estatura=prompt("ingrese estatura");
var hijoDueño=prompt("eres hijo del dueño");

if (edad>=18 && estatura>=1.2|| hijoDueño.toLowerCase() =="si") {
    alert("eres mayor de edad");
}else{
    alert("eres menor de edad");
}