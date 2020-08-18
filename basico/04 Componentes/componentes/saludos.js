Vue.component('saludo', {
    template: //html
    `
    <!-- Siempre el componente debe ir envuelto en un contenedor, en este caso un div -->
    <div>
        <h1>{{saludo}}</h1>
        <h3>otro texto</h3>
    </div>
    `,
    data(){
        return {
            saludo: 'Hola desde vue'
        }
    }
});