let app = Vue.createApp({
    data(){
        return {
            cajaASeleccionada: false,
            cajaBSeleccionada: false
        }
    },
    methods: {
        activar(caja){
            if(caja=="A"){
                if(this.cajaASeleccionada){
                    this.cajaASeleccionada=false;
                }else{
                    this.cajaASeleccionada=true;
                }
                
            }else if(caja=="B"){
                this.cajaBSeleccionada=!this.cajaBSeleccionada;
            }
        }
    }


}).mount('#estilos');

