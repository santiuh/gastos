<script setup>
import { onBeforeMount, ref } from "vue";
import { useOps } from "../composables/ops";
const {
  categorias,
  listacat,
  categoriaFiltro,
  tipoFiltro,
  fechaFiltroDesde,
  fechaFiltroHasta,
} = useOps();
const listacat2 = ref("");

onBeforeMount(async () => {
  await categorias();
  listacat2.value = listacat.value.categories;
});
</script>
<template>
  <div class="card" style="display: flex; align-items: center">
    <div
      class="card-body"
      style="display: flex; flex-direction: column; gap: 10px"
    >
      <h4>Filtrar</h4>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          v-model="categoriaFiltro"
          :class="categoriaFiltro !== 'Desactivado' ? 'seleccionado' : ''"
        >
          <option value="Desactivado" selected>Desactivado</option>
          <option v-for="categoria in listacat2" :value="categoria.id">
            {{ categoria.name }}
          </option>
        </select>
        <label for="floatingSelect">Categoría </label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          v-model="tipoFiltro"
          :class="tipoFiltro !== 'Desactivado' ? 'seleccionado' : ''"
        >
          <option value="Desactivado">Desactivado</option>
          <option :value="1">Ingreso</option>
          <option :value="2">Egreso</option>
        </select>
        <label for="floatingSelect">Ingreso/Egreso</label>
      </div>
      <div class="form-floating">
        <input
          class="form-control"
          type="date"
          v-model="fechaFiltroDesde"
          :class="fechaFiltroDesde !== '' ? 'seleccionado' : ''"
        />
        <label for="floatingInput">Desde</label>
      </div>
      <div class="form-floating">
        <input
          class="form-control"
          type="date"
          v-model="fechaFiltroHasta"
          :class="fechaFiltroHasta !== '' ? 'seleccionado' : ''"
        />
        <label for="floatingInput">Hasta</label>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        @click="
          (fechaFiltroDesde = ''),
            (fechaFiltroHasta = ''),
            (categoriaFiltro = 'Desactivado'),
            (tipoFiltro = 'Desactivado')
        "
      >
        Reiniciar Filtro
      </button>
    </div>
  </div>
</template>

<style>
.seleccionado {
  /* background-color: rgba(128, 128, 128, 0.162); */
  background-color: #0d6dfd2c;
}
</style>
