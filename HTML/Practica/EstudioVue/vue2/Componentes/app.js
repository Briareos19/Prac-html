const app = Vue.createApp({
    data(){
        return{
            amigos: [
                {
                    id:"Joshua", nombre:"Joshua Triana", phone:"1234", email: 'joshua@gmail.com'
                },
                {
                    id:"Manuel", nombre:"Manuel Idarraga", phone:"4567", email: 'manuel@gmail.com'
                }
            ]
        }
    }
});

app.mount("#app");