const app = new Vue({
    el:"#app",
    data:{
        saludo: "soy el ciclo de vida de vue"
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        //al crear los metodos, observadores, eventos, pero aun no accede al dom. aun no accede al 'el'
        console.log('created')
    },
    beforeMount() {
        //se ejecuta antes de insertar la informacion en el DOM
        console.log('beforeMount')
    },
    mounted() {
        //Se ejecuta al insertar el DOM
        console.log('mounted')
    },
    beforeUpdate() {
        //al detectar un cambio
        console.log('beforeUpdate')
    },
    updated() {
        //al realizar los cambios
        console.log('updated')
    },
    beforeDestroy() {
        //antes de destruir la instancia
        console.log('beforeDestroy')
    },
    destroyed() {
        //se destruye toda la instancia
        console.log('destroyed')
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
    
    
});