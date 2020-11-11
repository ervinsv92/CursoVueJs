<template>
<div>
    <h2>Tipo de cuenta: {{Cuenta}}</h2>
    <h2>Saldo: {{saldo}}</h2>
    <h2>Cuenta {{estado ? 'Activa' : 'Desactivada'}}</h2>
    <ul>
        <li v-for="(item, index) in servicios" :key="index">
            {{index+1}} - {{item}}
        </li>
    </ul>
    <AccionSaldo />
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
            estado: true,
            servicios: ['giro', 'abono', 'transferencia']
        }
    },
}
</script>

<style>

</style>
