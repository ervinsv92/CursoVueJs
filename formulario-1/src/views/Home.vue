<template>
  <form @submit.prevent="procesarFormulario">
    <input
      type="text"
      class="form-control mt-2"
      placeholder="Ingrese nombre"
      v-model.trim="tarea.nombre"
    />

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        value="javascript"
        v-model="tarea.categorias"
      />
      <label class="form-check-label" for="inlineCheckbox1"> Javascript</label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox2"
        value="nodejs"
        v-model="tarea.categorias"
      />
      <label class="form-check-label" for="inlineCheckbox2"> Node.js</label>
    </div>

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="urgente"
          v-model="tarea.estado"
        />
        <label class="form-check-label" for="inlineRadio1">Urgente</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="relax"
          v-model="tarea.estado"
        />
        <label class="form-check-label" for="inlineRadio2">Relax</label>
      </div>
    </div>

    <div class="mt-2">
      <input type="number" v-model.number="tarea.numero" class="form-control">
    </div>

    <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">
      Procesar
    </button>
  </form>
  <hr />
  <p>{{ tarea }}</p>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      tarea: {
        nombre: "",
        categorias: [],
        estado:"",
        numero:0
      },
    };
  },
  methods:{
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre == ""){
        console.log("Campo nombre vacio")
        return
      }
      console.log("No está vacio")
      this.tarea = {
        nombre: "",
        categorias: [],
        estado:"",
        numero:0
      }
    }
  },
  computed:{
    bloquear(){
      return this.tarea.nombre == ""
    }
  }
};
</script>
