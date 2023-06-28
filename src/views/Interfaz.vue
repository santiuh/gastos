<script setup>
import { onBeforeMount, ref } from "vue";
import balance from "../components/balance.vue";
import historial from "../components/historial.vue";
import agregarOp from "../components/agregarOp.vue";
import modal from "../components/modal.vue";
import filtro from "../components/filtro.vue";
import { useOps } from "../composables/ops";
import { useRouter } from "vue-router";
import { useLogin } from "../composables/log";
import modalError from "../components/modalError.vue";

const { usuario } = useLogin();
const router = useRouter();
const { modalEstado, modalErrorEstado } = useOps();

onBeforeMount(() => {
  if (!usuario.value) {
    console.log("inciado" + usuario.value);
    router.push("/");
  }
});
</script>

<template>
  <div class="row gap-2" style="height: 100%">
    <balance></balance>
    <agregarOp></agregarOp>
    <div
      style="
        display: flex;
        flex-direction: row;
        padding: 0;
        gap: 5px;
        height: 100%;
      "
    >
      <filtro></filtro> <historial></historial>
    </div>

    <modal v-show="modalEstado"></modal>
    <modalError v-show="modalErrorEstado"></modalError>
  </div>
</template>

<style></style>
