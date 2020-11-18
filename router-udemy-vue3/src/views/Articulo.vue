<template>
<div>
    <Articulo texto="Ruta con parámetros" />
    <h2>Parámetro: {{$route.params.id}}</h2>
    <h3>Nombre: {{articulo.title}}</h3>
    <p>{{articulo.id}} - {{articulo.body}}</p>
</div>
</template>

<script>
import Titulo from '../components/Titulo';
export default {
    components: {
        Titulo
    },
    data() {
        return {
            articulo: {}
        }
    },
    methods: {
        async consumirArticulo() {
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
                const array = await data.json();
                this.articulo = array;
            } catch (error) {

            }
        }
    },
    created(){
        this.consumirArticulo();
    }
}
</script>

<style>

</style>
