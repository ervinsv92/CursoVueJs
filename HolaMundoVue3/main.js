const app = Vue.createApp({
    data(){
        return {
            titulo:"Mi banco con Vue JS 3",
            cantidad:1000,
            enlace:"https://yotube.com",
            estado:true,
            servicios:['transferencias', 'pagos', 'giros'],
            desactivar:false
        }
    },
    methods:{
        agregarSaldo(){
            this.cantidad = this.cantidad +100;
        },
        disminuirSaldo(valor){

            if(this.cantidad == 0){
                this.desactivar = true;
                alert("saldo en 0");
                return;
            }

            this.cantidad = this.cantidad -valor;
        }
    },
    computed:{
        colorCantidad(){
            return [this.cantidad > 500 ?'text-success':'text-danger'];
        },
        mayusculasTitulo(){
            return this.titulo.toUpperCase();
        }
    }
});