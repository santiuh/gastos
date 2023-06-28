<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { useOps } from "../composables/ops";
const {
  editarOperaciones,
  modalEstado,
  modalFecha,
  modalCategoria,
  modalCategoriaID,
  modalTypeId,
  modalCategoriaNuevo,
  modalMonto,
  modalNota,
  modalId,
  listacat,
  modalErrorContenido,
  modalErrorEstado,
  categorias,
} = useOps();
const listacat2 = ref();

onBeforeMount(async () => {
  await categorias();
  listacat2.value = listacat.value.categories;
});

const listacat2ingreso = computed(() => {
  if (listacat2.value) {
    return listacat2.value.filter((objeto) => objeto.Type.id === 1);
  } else {
    return 0;
  }
});

const listacat2egreso = computed(() => {
  if (listacat2.value) {
    return listacat2.value.filter((objeto) => objeto.Type.id === 2);
  } else {
    return 0;
  }
});

const validarEditar = (a, b, c, d, e) => {
  const datos = [a, b, c, d];
  for (let i = 0; i < 4; i++) {
    if (!datos[i] || datos[i].length === 0) {
      modalErrorContenido.value = "Todos los campos deben ser completados.";
      modalErrorEstado.value = true;
      return;
    }
  }
  if (isNaN(d)) {
    d = modalCategoriaID.value;
  }
  if (a < 0) {
    modalErrorContenido.value = "El monto debe ser mayor que 0.";
    modalErrorEstado.value = true;
    return;
  }
  editarOperaciones(a, b, c, d, e).then((modalEstado.value = false));
};
</script>

<template>
  <div
    class="position-absolute top-0 start-0 p-0 z-3"
    style="height: 100vh; width: 100vw"
  >
    <div
      class="d-flex bg-black justify-content-center align-items-center h-100 w-100"
      style="--bs-bg-opacity: 0.5"
    >
      <div class="card" style="max-width: fit-content; gap: 5px; padding: 1rem">
        <h2 style="display: flex; justify-content: center">EDITAR</h2>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Fecha</span>
          <input
            type="date"
            class="form-control"
            v-model="modalFecha"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Descripcion</span>
          <input
            type="text"
            class="form-control"
            v-model="modalNota"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Categoria </span>
          <select v-model="modalCategoria" name="" id="" class="form-control">
            <option selected>{{ modalCategoriaNuevo }}</option>
            <option
              v-for="categoria in listacat2ingreso"
              :value="categoria.id"
              v-show="modalTypeId === 1"
            >
              {{ categoria.name }}
            </option>
            <option
              v-for="categoria in listacat2egreso"
              :value="categoria.id"
              v-show="modalTypeId === 2"
            >
              {{ categoria.name }}
            </option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Monto</span>
          <input
            type="number"
            class="form-control"
            v-model="modalMonto"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          class="btn btn-primary shadow"
          @click="
            validarEditar(
              modalMonto,
              modalFecha,
              modalNota,
              modalCategoria,
              modalId
            )
          "
        >
          Confirmar
        </button>
        <button class="btn btn-secondary" @click="modalEstado = false">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.shadowModal {
  -webkit-box-shadow: 10px 10px 300px 200px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 10px 10px 300px 200px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 10px 300px 700px rgba(0, 0, 0, 0.4);
}
</style>
