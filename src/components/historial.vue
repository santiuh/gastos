<script setup>
import { useOps } from "@/composables/ops";
import { ref } from "vue";
import operacion from "./operacion.vue";
const {
  operaciones,
  listaops,
  categoriaFiltro,
  tipoFiltro,
  fechaFiltroDesde,
  fechaFiltroHasta,
} = useOps();
operaciones();
</script>
<template>
  <div class="card" style="height: 100%; overflow: scroll; flex-grow: 1">
    <ul class="card-body">
      <operacion
        v-for="operacion in listaops.operations"
        v-show="
          (categoriaFiltro === 'Desactivado' ||
            categoriaFiltro === operacion.Category.id) &&
          (tipoFiltro === 'Desactivado' || tipoFiltro === operacion.Type.id) &&
          (fechaFiltroDesde === '' ||
            operacion.dateOperation.slice(0, 10) >= fechaFiltroDesde) &&
          (fechaFiltroHasta === '' ||
            operacion.dateOperation.slice(0, 10) <= fechaFiltroHasta)
        "
        :fecha="operacion.dateOperation"
        :categoria="operacion.Category.name"
        :categoriaID="operacion.Category.id"
        :typeid="operacion.Type.id"
        :nota="operacion.note"
        :monto="operacion.amount"
        :id="operacion.id"
      ></operacion>
    </ul>
  </div>
</template>
