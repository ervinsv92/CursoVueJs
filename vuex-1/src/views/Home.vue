<template>
  <div class="home">
    <h1
      :style="colorContador"
    >
      {{titulo}}: {{contador}}
    </h1>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir />
    <hr>
    <BotonAccion :estado="true" />
    <BotonAccion :estado="false" />
  </div>
</template>

<script>
import BtnDisminuir from '../components/BtnDisminuir';
import BotonAccion from '../components/BotonAccion';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BotonAccion
  },
  data(){
    return {
      titulo:"Mi contador vuex"
    }
  },
  computed:{
    ...mapState(['contador']),//el map state solo se mapea en las propiedades computadas
    colorContador(){
      return [this.contador > 100 ? {'color':'green'} : {'color':'red'}]
    }
  },
  methods:{
    ...mapMutations(['incrementar']), //Las mutaciones se mapean dentro del objeto methods, pero no es recomendable, se deben llamar dentro de las acciones del store de vuex
    ...mapActions(['accionIncrementar'])
  }
}
</script>
