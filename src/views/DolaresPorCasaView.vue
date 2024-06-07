<template>
  <Toolbar />
  <h1>Dolares por casa</h1>
  <div class="container-graficos">
    <GraficoDolaresPorCasa />
  </div>
</template>

<script setup lang="ts">
import Toolbar from "../components/Toolbar.vue";
import GraficoDolaresPorCasa from "@/components/GraficoDolaresPorCasa.vue";
</script>

<style scoped>
h1 {
  padding-top: 100px;
}
.container-graficos {
  display: flex;
  margin: 10px;
}
</style>
