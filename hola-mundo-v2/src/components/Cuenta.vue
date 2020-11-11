<template>
<div>
    <h2>Tipo de cuenta: {{cuenta}}</h2>
    <h2>Saldo: {{saldo}}</h2>
    <h2>Cuenta {{estado ? 'Activa' : 'Desactivada'}}</h2>
    <ul>
        <li v-for="(item, index) in servicios" :key="index">
            {{index+1}} - {{item}}
        </li>
    </ul>
    <AccionSaldo 
        texto="Aumentar Saldo"
        @accion="aumentar" 
    />
    <AccionSaldo 
        texto="Disminuir Saldo"     
        :desactivar="desactivar"
        @accion="disminuir"
    />
</div>
</template>

<script>
import AccionSaldo from './AccionSaldo';
export default {
    name: 'Cuenta',
    components: {
        AccionSaldo
    },
    data() {
        return {
            saldo: 1000,
            cuenta: "Visa",
            desactivar: false,
            estado:true,
            servicios: ['giro', 'abono', 'transferencia']
        }
    },
    methods: {
         aumentar(){
            this.saldo += 100;
            this.desactivar = false
        },
        disminuir(){
            if(this.saldo === 0){
                this.desactivar = true
                alert("Saldo Agotado")
                return;
            }
            this.saldo -= 100;
        }
    },
}
</script>

<style>

</style>
