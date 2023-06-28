<script setup>
import { onBeforeMount, ref } from "vue";
import { postOperaciones } from "../services/base";
import { useOps } from "../composables/ops";

const {
  categorias,
  listacat,
  operaciones,
  listaops,
  agregarOperaciones,
  modalErrorEstado,
  modalErrorContenido,
} = useOps();
const fecha = ref();
const categoriamodel = ref("Categoría");
const monto = ref();
const descripcion = ref();
const tipo = ref(1);
const listacat2 = ref();
onBeforeMount(async () => {
  await categorias();
  listacat2.value = listacat.value.categories;
});

const validar = (a, b, c, d, e) => {
  const datos = [a, b, c, d, e];
  for (let i = 0; i < 5; i++) {
    if (!datos[i] || datos[i].length === 0) {
      modalErrorContenido.value = "Todos los campos deben ser completados.";
      modalErrorEstado.value = true;
      return;
    }
  }
  if (a < 0) {
    modalErrorContenido.value = "El monto debe ser mayor que 0.";
    modalErrorEstado.value = true;
    return;
  }
  if (isNaN(d)) {
    modalErrorContenido.value = "Selecccione una categoría.";
    modalErrorEstado.value = true;
    return;
  }

  agregarOperaciones(a, b, c, d, e);
};
</script>

<template>
  <div class="card" style="display: flex; align-items: center; padding: 0">
    <div class="card-body" style="display: flex; flex-direction: row; gap: 5px">
      <div class="form-floating">
        <input class="form-control" type="date" v-model="fecha" />
        <label for="floatingInput">Fecha</label>
      </div>

      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          v-model="categoriamodel"
        >
          <option value="Categoría" disabled selected hidden>Categoría</option>
          <option v-for="categoria in listacat2" :value="categoria.id">
            {{ categoria.name }}
          </option>
        </select>
        <label for="floatingSelect">Categoría </label>
      </div>

      <div class="form-floating mb-3" style="margin: 0px !important">
        <input
          type="number"
          min="0"
          class="form-control"
          id="floatingInput"
          placeholder="1000"
          v-model="monto"
        />
        <label for="floatingInput">Monto</label>
      </div>
      <div class="form-floating mb-3" style="margin: 0 !important">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Descripcion"
          v-model="descripcion"
        />
        <label for="floatingInput">Descripcion</label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          v-model="tipo"
        >
          <option value="1">Ingreso</option>
          <option value="2">Egreso</option>
        </select>
        <label for="floatingSelect">Ingreso/Egreso</label>
      </div>
      <div>
        <button
          class="btn btn-primary"
          style="height: 3.5rem"
          @click="validar(monto, fecha, descripcion, categoriamodel, tipo)"
        >
          Agregar
        </button>
      </div>
    </div>
  </div>
</template>

<style>
label::after {
  background-color: transparent !important;
}
</style>
