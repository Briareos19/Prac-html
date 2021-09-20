const app = Vue.createApp({
    data(){
        return {
            contador: 0,
            nombre: ''
        }
    }, 
    methods: {
        adicionar1(){
            this.contador++;
        },
        disminuir1(){
            this.contador--;
        },
        adicionarN(numero){
            this.contador = this.contador + numero;
        },
        asignarNombre(event){            
            this.nombre = event.target.value;
        },
        submitForm(event){
            event.preventDefault();
        }
    }
});



app.mount("#eventos");