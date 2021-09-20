const app = Vue.createApp({
    data(){
        return {
            valorMeta: '',
            metas: []
        }
    },  
   
    methods: {   
        agregarMeta(){
            this.metas.push(this.valorMeta);
        },
        quitarTarea(indice){
            this.metas.splice(indice,1);
            this.valorMeta='';
        }
    }
});



app.mount("#app");