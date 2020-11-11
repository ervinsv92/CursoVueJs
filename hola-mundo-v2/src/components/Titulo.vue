<template>
<div>
    <h1>{{texto}}</h1>
</div>
</template>

<script>
export default {
    name: 'Titulo',
    props: {
        texto: String
    }
}
</script>

<style scoped>
/* Scoped es para que los estilos solo funcionen con este componente*/
h1 {
    color: peru;
}
</style>
