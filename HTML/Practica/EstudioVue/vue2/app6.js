const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },  
    computed: {
        cambioCajaA(){
            return{
                active : this.boxASelected
            }
        }
    },
    methods: {   
        boxSeleccionado(letra){
            if(letra=="A"){
                this.boxASelected = !this.boxASelected;
            }else if(letra=="B"){
                this.boxBSelected = !this.boxBSelected;
            }else if(letra=="C"){
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});



app.mount("#estilos");