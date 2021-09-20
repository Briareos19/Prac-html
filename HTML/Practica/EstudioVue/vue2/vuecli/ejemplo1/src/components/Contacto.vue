<template>
    <li>
        <h2>{{nombre}}</h2>
        <button>Mostrar</button>
        <ul>
            <li>Telefono: {{telefono}}</li>
            <li>Correo: {{email}}</li>
        </ul>    
    </li>   
</template>

<script>

export default ({
    props:{
        llave: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        esFavorito: {
            type: Boolean,
            required: false,
            default: false
        }
    }
})
</script>
