<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useLogin } from "./composables/log";
import { watchEffect } from "vue";
import { computed } from "@vue/reactivity";
const { logout, usuario } = useLogin();
</script>

<template>
  <div
    class="container-fluid"
    style="
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      margin: 0;
      padding: 0;
      height: 100vh;
    "
  >
    <div class="row" style="height: 100%; padding-bottom: 20%">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1"> Gastos </span>
          <RouterLink to="/">
            <button class="btn btn-danger" v-show="usuario" @click="logout">
              Logout
            </button>
          </RouterLink>
        </div>
      </nav>
      <RouterView style="padding-top: 1em"></RouterView>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0 !important;
}
</style>
