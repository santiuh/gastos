<script setup>
import { ref } from "vue";
import Signin from "../components/Signin.vue";
import SignUp from "../components/Signup.vue";
import { useLogin } from "@/composables/log";
import { useRouter } from "vue-router";
import modalError from "../components/modalError.vue";
import { useOps } from "../composables/ops";
const { modalErrorEstado } = useOps();
const router = useRouter();
const { usuario } = useLogin();
const form = ref(false);

if (usuario.value) {
  console.log("inciado" + usuario.value);
  router.push("/interfaz");
}
</script>

<template>
  <modalError v-show="modalErrorEstado"></modalError>

  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    "
  >
    <div class="card" style="max-width: fit-content; display: flex">
      <div class="card-body" style="display: flex; flex-direction: column">
        <Signin v-if="!form" />
        <SignUp v-if="form"></SignUp>

        <button
          style="margin-top: 1rem"
          class="btn btn-primary"
          @click="form = true"
          v-if="!form"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>
