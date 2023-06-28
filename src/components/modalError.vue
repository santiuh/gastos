<script setup>
import { useLogin } from "../composables/log";
import { useOps } from "../composables/ops";
const { setError } = useLogin();
const { modalErrorContenido, modalErrorEstado } = useOps();
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
      <div class="card mo" style="max-width: fit-content; gap: 5px">
        <div class="card-body">
          <h4 style="display: flex; justify-content: center">ERROR</h4>
          {{ modalErrorContenido }}
        </div>

        <button
          class="btn btn-danger"
          @click="(modalErrorEstado = false), (setError = null)"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.mo {
  padding: 1rem;
}
.shadowModal {
  -webkit-box-shadow: 10px 10px 300px 200px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 10px 10px 300px 200px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 10px 300px 700px rgba(0, 0, 0, 0.4);
}
</style>
