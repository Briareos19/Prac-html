<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <contacto v-for="amigo in amigos"
  :key="amigo.id"
  :id="amigo.id"
  :nombre="amigo.nombre"
  :telefono="amigo.telefono"
  :email="amigo.email"
  ></contacto>  
  <contacto
  :key="joshua.id"
  :id="joshua.id"
  :nombre="joshua.nombre"
  :telefono="joshua.telefono"
  :email="joshua.email">
  </contacto>    
</template>

<script>

import Contacto from './components/Contacto.vue'

export default {
  name: 'App',
  components: {
    Contacto
  },
  data(){
    return {
      amigos: [
        {
          id: "david", nombre: "David Moreno", telefono: "1234", email: "david@gmail.com"
        },
        {
          id: "nini", nombre: "Nini Santanilla", telefono: "5678", email: "nini@gmail.com"
        }
      ],
      joshua: {
          id: "joshua", nombre: "Joshua Triana", telefono: "8888", email: "joshua@gmail.com"
        }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
