setInterval(()=>{
    var reloj = document.getElementsByClassName("reloj")[0];
    var currentTime= new Date();
    var hora=currentTime.getHours();
    if (hora<10) {
        hora=`0${hora}`;
    }
    var minutos=currentTime.getMinutes();
    if (minutos<10) {
        minutos=`0${minutos}`;
    }
    var segundos=currentTime.getSeconds();
    if (segundos<10) {
        segundos=`0${segundos}`;
    }

    reloj.innerHTML= `${hora}:${minutos}:${segundos}`
},1000)