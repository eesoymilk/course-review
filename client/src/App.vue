<template>
  <NavBar />
  <suspense>
    <RouterView />
    <template #fallback>
      <Loading />
    </template>
  </suspense>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>
