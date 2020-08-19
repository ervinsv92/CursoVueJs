Vue.component('hijo', {
    template:
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo: {{numero}}</h4>
        <h4>Componente nombre: {{nombre}}</h4>
        <button @click="numero++">+</button>
    </div>
    `,
    props:['numero'],
    data(){
        return {
            nombre:'Ervin'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre)
    }
})