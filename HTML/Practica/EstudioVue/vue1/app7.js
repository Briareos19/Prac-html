let app = Vue.createApp({
    data(){
        return {
            cajaASeleccionada: false,
            cajaBSeleccionada: false,
            cajaCSeleccionada: false
        }
    },
    computed: {
        boxAClases(){
            return {
                active: this.cajaASeleccionada
            }
        }
    },
    methods: {
        activar(caja){
            if(caja=="A"){
                this.cajaASeleccionada=!this.cajaASeleccionada;                
            }else if(caja=="B"){
                this.cajaBSeleccionada=!this.cajaBSeleccionada;
            }else if(caja=="C"){
                this.cajaCSeleccionada=!this.cajaCSeleccionada;
            }
        }
    }


}).mount('#estilos');

