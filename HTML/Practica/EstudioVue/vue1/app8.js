let app = Vue.createApp({
    data(){
        return {
            valorMeta: "",
            metas: []
        }
    },    
    methods: {
        adicionarMeta(){
            this.metas.push(this.valorMeta);
        },
        remover(indice){
            this.metas.splice(indice,1);
        }
    }


}).mount('#metas');

