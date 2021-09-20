window.onload=iniciar;

function iniciar(){
    let boton=document.getElementById("btnCargar");
    boton.addEventListener("click", clickBoton);
}

async function cargarUrl(url){
    let respuesta =await fetch(url);
    return respuesta.json();
}

async function clickBoton(){

    let pais=document.getElementById("selectPais").value;
    let fecha=document.getElementById("inputFecha").value;

    let url=`https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`;

    let json= await cargarUrl(url);
    console.log(json);

    let estadisticas=json.dates[fecha].countries[pais]
    console.log(estadisticas);

    let propiedades=[
    "today_confirmed",
    "today_deaths",
    "today_intensive_care",
    "today_new_confirmed",
    "today_new_deaths",
    "today_new_intensive_care",
    "today_new_open_cases",
    "today_new_recovered",
    "today_new_total_hospitalised_patients",
    "today_open_cases",
    "today_recovered"
    ]
/*
    document.getElementById("today_confirmed").innerHTML = estadisticas.today_confirmed
    document.getElementById("today_deaths").innerHTML = estadisticas.today_deaths
    document.getElementById("today_intensive_care").innerHTML = estadisticas.today_intensive_care
    document.getElementById("today_new_confirmed").innerHTML = estadisticas.today_new_confirmed
    document.getElementById("today_new_deaths").innerHTML = estadisticas.today_new_deaths
    document.getElementById("today_new_intensive_care").innerHTML = estadisticas.today_new_intensive_cared
    document.getElementById("today_new_open_cases").innerHTML = estadisticas.today_new_open_cases
    document.getElementById("today_new_recovered").innerHTML = estadisticas.today_new_recovered
    document.getElementById("today_new_total_hospitalised_patients").innerHTML = estadisticas.today_new_total_hospitalised_patients
    document.getElementById("today_open_cases").innerHTML = estadisticas.today_open_cases
    document.getElementById("today_recovered").innerHTML = estadisticas.today_recovered
*/
    //cuando se busca usar una propiedad contenida despues de un punto 
    //y se desea que sea dinamico se buscara colocandola entre corchetes

     for (let i = 0; i < propiedades.length; i++) {
        let element = propiedades[i];
        console.log(element);
        document.getElementById(`${element}`).innerHTML=estadisticas[element];
        
    }
}