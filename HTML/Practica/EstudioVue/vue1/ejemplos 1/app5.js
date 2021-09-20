let app = Vue.createApp({
    data(){
        return {
            contador: 0,
            nombre: '',
            apellido: '',
            nombreCompleto: ''
        }
    },
    watch: {
        nombre(value){
            this.nombreCompleto = value + " " + this.apellido;
        },
        apellido(value){
            this.nombreCompleto = this.nombre + " " + value;
        }, 
        contador(value){
            /*if(value>100){
                this.contador = 0;
            }*/
            if(value>100){
                const that = this;
                setTimeout( function (){
                    that.contador = 0;
                }, 3000);                
            }
        }
    },
    /*computed: {
        nombreCompleto(){
            console.log("entra a computed");
            if(this.nombre==="")
                return "";
            else
                return this.nombre + "Triana";
        }
    },*/
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
        submitFormulario(event){
            console.log("entra al submit");
        },
        /*salida(){
            console.log("entra a funciones");
            if(this.nombre==="")
                return "";
            else
                return this.nombre + "Triana";
        }*/
    }
});

app.mount("#eventos");