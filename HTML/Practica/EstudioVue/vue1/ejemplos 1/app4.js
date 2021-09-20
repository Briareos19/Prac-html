let app = Vue.createApp({
    data(){
        return {
            contador: 0,
            nombre: ''
        }
    },
    methods: {
        adicionar(){
            this.contador = this.contador + 1;
            //this.contador++;
        },
        disminuir(){
            this.contador = this.contador - 1;
        },
        adicionarN(numero){
            this.contador = this.contador + numero;
        },
        cambioNombre(event){
            this.nombre = event.target.value;
        }, 
        submitFormulario(event){
            console.log("entra al submit");
        }
    }
});

app.mount("#eventos");