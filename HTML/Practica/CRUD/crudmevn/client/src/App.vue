<template>
    <v-app>
        <!-- Espacio utilizado como prueba de Api -->
        <div class="d-flex justify-center">
          <h1>Nombre Pelicula: {{nombre_pelicula}} </h1>
        </div>

        <div class="d-flex justify-center">
          <h1 id="addTodo">Add ToDo</h1>
        </div>

        <div class="d-flex justify-center">
          <v-col cols="6" style="margin: 0px auto">
          <v-text-field v-model="newToDo" label="Add Todo" solo></v-text-field>
          </v-col>
        </div>

        <div class="d-flex justify-center">
          <v-btn @click="addToDo()" color="primary">Add ToDo</v-btn>
        </div>
        
          <!-- uncompleted todos -->
        <div class="d-flex justify-center">
          <h1>Unompleted ToDo</h1>
        </div>

        <div v-for="todo in uncompletedTodos" :key="todo._id">
            <v-card class="mx-auto" color="white" dark max-width="800">
                <v-card-text class="font-weight-bold title blue--text">
                    {{ todo.title }}

                    <!-- creacion de botones done y delete -->
                    <v-list-item id="todo-list-item" class="grow">
                          <v-btn @click="completeTodo(todo._id)" class="mx-2" small color="green">Done</v-btn>
                          <v-btn @click="deleteTodo(todo._id)" class="mx-2" small color="red">Delete</v-btn>
                    </v-list-item>
                
                </v-card-text>
            </v-card>
        </div>

          <!-- completed todos -->
        <div class="d-flex justify-center">
            <h1>Completed ToDo</h1>
        </div>
            <h1 class="text-center white--text">Completed Todos</h1>

        <div v-for="todo in completedTodos" :key="todo._id">
            <v-card class="mx-auto" color="blue" dark max-width="800">
                <v-card-text class="font-weight-bold title white--text">
                    {{ todo.title }}
                    <!-- boton para borrar tareas ya terminadas, se comunica con el index del backend -->
                    <v-list-item id="todo-list-item" class="grow">
                          <v-btn @click="deleteTodo(todo._id)" class="mx-2" small color="red">Delete</v-btn>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </div>
    </v-app>
</template>

<script>
import axios from "axios";
export default {
 data: () => ({
  newToDo: "",
  completedTodos: [],
  uncompletedTodos: []
 }),
 methods: {
  addToDo() {
    console.log(this.newToDo);
    axios.post("http://localhost:3000/todo/add", {
      todo: this.newTodo
    }).then(response => {
        console.log(response.data);
      });
  },

  deleteTodo(todoID) {
      axios.delete("http://localhost:3000/todo/" + todoID).then(response => {
      console.log(response.data);
 });
 },

 completeTodo(todoID) {
      axios.post("http://localhost:3000/todo/complete/" + todoID)
      .then(response => {
      console.log(response.data);
  });
}


},
created() {
    // fetch uncompleted task
    axios.get("http://localhost:3000/todo/uncompleted")
    .then(response => (this.uncompletedTodos = response.data))
    .catch(error => console.log(error));
    
    // fetch completed task
    axios.get("http://localhost:3000/todo/completed")
    .then(response => (this.completedTodos = response.data))
    .catch(error => console.log(error));

    // se puede usar axios para hacer conecion con api
    //se usaria la url de la api, y si utiliza autenticacion seria ?api_key="y la apikey"
        //axios.get("http://localhost:3000/todo/completed")
    //en esta caso el response.data, seria todo el json de la api
        //.then(response => (this.completedTodos = response.data))
    //como es un diccionario se puede usar asi
    //nombre de pelicula es la variable que esta al principio de este template
        //.then(response => (this.nombre_pelicula = response.data[title]))
        //.catch(error => console.log(error));
}
}
</script>
