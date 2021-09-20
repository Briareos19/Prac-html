const app = Vue.createApp({
    data(){
        return {
            meta1: "Pasar ciclo 1",
            meta2: "Pasar ciclo 2",
            meta3: "Pasar ciclo 3",
            direccionGoogle: "https://www.google.com",
            clase:'demo',
            contenidoP: "<h1>Misiontic</h1>",
            color1: "Rojo",
            color2: "Azul",
        }
    },
    methods: {
        numeroAleatorio(){
            let numero = Math.random();
            if(numero<0.5){
                return this.color1;
            }else{
                return this.color2;
            }
        }
    }
});



app.mount("#variables");