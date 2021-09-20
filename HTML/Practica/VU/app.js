Vue.createApp({
    //seccion de variables
    data(){
        return{
            valorDelCampo:'', 
            tareas:[]
        }
    }, 

    methods: {
        agregarTarea(){
            alert("sirvo aqui");
            this.tareas.push(this.valorDelCampo);
        }
    }


}).mount("#app");