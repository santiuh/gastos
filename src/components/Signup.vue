<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
import { useLogin } from "@/composables/log";
import { useOps } from "../composables/ops";
const router = useRouter();
const { setError, register } = useLogin();
const { modalErrorContenido, modalErrorEstado } = useOps();
const email = ref("");
const pass = ref("");
const user = ref("");

const tryRegister = async (user, email, pass) => {
  const variables = [user, email, pass];
  for (let i = 0; i < 3; i++) {
    if (variables[i].length === 0) {
      modalErrorContenido.value = "Debe completar todos los campos.";
      modalErrorEstado.value = true;
      return;
    }
  }
  await register(user, email, pass);
  if (setError.value === null) {
    router.push("/interfaz");
  } else {
    modalErrorContenido.value = setError.value.message;
    modalErrorEstado.value = true;
    // alert(setError.value.message);
  }
};
</script>

<template>
  <h1 style="display: flex; justify-content: center">Registro</h1>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Usuario</span>
    <input
      type="text"
      v-model="user"
      class="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Email</span>
    <input
      type="text"
      v-model="email"
      class="form-control"
      placeholder="email@email.com"
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
      placeholder="Contraseña"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>
  <button class="btn btn-success" @click="tryRegister(user, email, pass)">
    Sign Up
  </button>
</template>
