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

app.component("contacto",{
    template: `
    <li>
    <h2>{{amigo.nombre}}</h2>
        <button>Mostrar</button>
        <ul>
            <li>Telefono: {{amigo.phone}}</li>
            <li>Email: {{amigo.email}}</li>
        </ul>
    </li>
    `, data(){
        return{
            amigo: {
                id:"Manuel", nombre:"Manuel Idarraga", phone:"4567", email: 'manuel@gmail.com'
            }
        }
    }
});

app.mount("#app");