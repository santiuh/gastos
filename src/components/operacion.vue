<script setup>
import { ref } from "vue";
import { useOps } from "../composables/ops";
const {
  borrarOperaciones,
  modalEstado,
  modalFecha,
  modalCategoria,
  modalCategoriaID,
  modalCategoriaNuevo,
  modalMonto,
  modalNota,
  modalId,
  modalTypeId,
} = useOps();

const props = defineProps([
  "fecha",
  "categoria",
  "categoriaID",
  "nota",
  "monto",
  "id",
  "typeid",
]);

const completarModal = () => {
  modalFecha.value = props.fecha.slice(0, 10);
  modalCategoria.value = props.categoria;
  modalCategoriaID.value = props.categoriaID;
  modalMonto.value = props.monto;
  modalNota.value = props.nota;
  modalId.value = props.id;
  modalTypeId.value = props.typeid;
  modalCategoriaNuevo.value = props.categoria;
};
</script>

<template>
  <div
    class="col operacion"
    style="
      gap: 8px;
      display: flex;
      border: 1px lightgray solid;
      border-radius: 5px;
      padding: 5px;
      margin: 10px;
      align-items: center;
    "
  >
    <span> {{ fecha.slice(0, 10) }}</span>
    <span
      :class="typeid === 1 ? 'ingreso' : 'egreso'"
      style="
        /* background-color: #f8f9fa; */
        padding: 0.375rem;
        border-radius: 0.375rem;
      "
      >{{ categoria }}</span
    >
    <span style="flex-grow: 1">{{ nota }}</span>
    <span a>${{ monto }}</span>
    <button
      class="btn btn-light"
      @click="(modalEstado = !modalEstado), completarModal()"
    >
      Editar
    </button>
    <button class="btn btn-light borrar" @click="borrarOperaciones(id)">
      Borrar
    </button>
  </div>
</template>

<style>
.operacion:hover {
  background-color: rgb(234, 234, 234);
}
.borrar:hover {
  background-color: rgba(255, 0, 0, 0.514) !important;
}
.ingreso {
  background-color: rgba(1, 191, 1, 0.372);
}
.egreso {
  background-color: rgba(255, 0, 0, 0.514);
}
</style>
