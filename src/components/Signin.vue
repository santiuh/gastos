<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
import { useLogin } from "@/composables/log";
import { useOps } from "../composables/ops";
const router = useRouter();
const { modalErrorContenido, modalErrorEstado } = useOps();
const { trylogin, setError } = useLogin();
const email = ref("santiagogirolami@gmail.com");
const pass = ref("curco");

const login = async (email, pass) => {
  await trylogin(email, pass);
  if (setError.value === null) {
    router.push("/interfaz");
  } else {
    modalErrorContenido.value = setError.value.message;
    modalErrorEstado.value = true;
  }
};
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <h2 style="justify-content: center; display: flex">Iniciar sesion</h2>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Correo</span>
      <input
        type="text"
        v-model="email"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Contraseña</span>
      <input
        type="password"
        v-model="pass"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <button
      style="width: 320px"
      class="btn btn-primary"
      @click="login(email, pass)"
    >
      Sign In
    </button>
  </div>
</template>
