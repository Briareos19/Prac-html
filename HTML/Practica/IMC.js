//se usa para asegurarse que ha cargado todo el codigo
window.onload=iniciar;

function iniciar(){
    var btnCalcular=document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);

    var btnCalcular2=document.getElementById("btnCalcular2");
    btnCalcular2.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){
    var txtPeso=document.getElementById("txtPeso");
    var peso=txtPeso.value;
    alert(peso);
    var txtAltura=document.getElementById("txtAltura")
    var altura=txtAltura.value;
    alert(altura);

    var IMC=peso/( Math.pow(altura,2));
    alert("su indice es " +Math.round(IMC))

    alert("click")
}