Vue.createApp({
    el: "#app",
    data() {
        return{
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    },
    created: function(){
        console.log("Se crea el elemento");
    }, mounted: function(){
        console.log("Se monta el elemento");
    }


}).mount('#app');

