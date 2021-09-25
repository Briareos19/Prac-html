/* var contador=0;
while (contador<3) {
    alert(contador);
    contador++;
}

contador=0;

do {
    alert(contador);
    contador++;
} while (contador<3);

var sumatoria=0;
contador=0;
while(contador<=100){
    sumatoria+=contador; 
    contador++;
}
alert(sumatoria);*/

/* for(var i=0; i<10; i++){
    alert(i+100);
} */

//numeros pares
/* for (var i=0; i<=20; i+=2){
    alert(i);
} */

var sumatoriaPares=0;
for(var i=0; i<10; i++){
    if (i%2==0) {
        alert("el numero " +i+" es par");
        sumatoriaPares+=i;
    }
} 
alert("la sumatoria de los numero pares es " + sumatoriaPares);