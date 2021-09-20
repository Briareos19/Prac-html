Vue.createApp({
   data(){
       return{
           valorDelCampo: '',
           goals: []
       }
   }, methods: {
       adicionarMeta(){
           this.goals.push(this.valorDelCampo);
       }
   }
}).mount("#app");