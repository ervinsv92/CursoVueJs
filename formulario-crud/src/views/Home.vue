<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"/>
  </form>
  <hr />
  <p>{{ tarea }}</p>
</template>

<script>

import Input from '../components/Input';
import { mapActions } from 'vuex';
const shortid = require('shortid')

export default {
  name: "Home",
  components: {
    Input
  },
  data() {
    return {
      tarea: {
        id:"",
        nombre: "",
        categorias: [],
        estado:"",
        numero:0
      },
    };
  },
  methods:{
    ...mapActions['setTareas'],
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre == ""){
        console.log("Campo nombre vacio")
        return
      }
      console.log("No está vacio")

      this.tarea.id = shortid.generate()

      this.setTareas(this.tarea)

      this.tarea = {
        id:"",
        nombre: "",
        categorias: [],
        estado:"",
        numero:0
      }
    }
  },
  
};
</script>
