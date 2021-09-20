
const app = Vue.createApp({
    data() {
        return{      
            saludJugador: 100,
            saludMonstruo: 100,
            contadorRonda: 0,
            winner: null,
            mensajes: []
        }
    }, 
    watch: {
        saludJugador(value){
            if(value<=0 && this.saludMonstruo<=0){
                this.wineer = "empate";
            }else if(value<=0){
                this.winner = "monstruo";
            }
        },
        saludMonstruo(value){
            /*if(value<=0 && this.saludJugador<=0){
                this.winner = "empate";
            }else */if(value<=0){
                this.winner = "jugador";
            }
        }
    },
    computed:{
        monsterBarStyles(){
            return {width: this.saludMonstruo + "%"}
        },playerBarStyles(){
            return {width: this.saludJugador + "%"}
        },calculoEspecial(){
            return this.contadorRonda % 3 != 0;
        }
    },
    methods: { 
        atacarMonstruo(){
            this.contadorRonda++;
            let valorAtaque=this.aleatorio(5,12);
            this.adicionarMensaje("jugador","atacar",valorAtaque);
            this.saludMonstruo -= valorAtaque;
            this.atacarJugador()
        },
        atacarJugador(){
            let valorAtaque=this.aleatorio(8,15);
            this.adicionarMensaje("monstruo","atacar",valorAtaque);
            this.saludJugador -= valorAtaque;
        },
        atacarEspecialMonstruo(){
            this.contadorRonda++;
            let valorAtaque=this.aleatorio(12,20);
            this.adicionarMensaje("jugador","ataque especial",valorAtaque);
            this.saludMonstruo -= valorAtaque;
            this.atacarJugador()
        },
        curarJugador(){
            this.contadorRonda++;
            let valorCurar=this.aleatorio(10,15);
            if(this.saludJugador + valorCurar > 100){
                this.saludJugador = 100;
            }else{
                this.saludJugador += valorCurar;
            }
            this.adicionarMensaje("jugador","curar",valorCurar);
            this.atacarJugador()
        },
        rendirse(){
            this.winner= 'monstruo';
        },
        aleatorio(min, max){
            return Math.floor(Math.random()*(max-min) + min);
        },       
        adicionarMensaje(quien,que,valor){
            this.mensajes.unshift({
                actionBy: quien,
                actionType: que,
                actionValue: valor
            });
        }
    }
});

app.mount("#game");