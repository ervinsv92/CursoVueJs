Vue.component('contador', {
    template: //html
    `
    <!-- Siempre el componente debe ir envuelto en un contenedor, en este caso un div -->
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div>
    `,
    data(){
        return {
            numero: 0
        }
    }
});