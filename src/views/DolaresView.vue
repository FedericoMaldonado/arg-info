<template>
  <Toolbar />
  <h1>Dólares</h1>
  <div class="container-graficos">
    <GraficoDolares />
  </div>
</template>

<script setup lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import GraficoDolares from "@/components/GraficoDolares.vue";
</script>

<style scoped>
h1 {
  padding-top: 50px;
}
.container-graficos {
  display: flex;
  margin: 10px;
  gap: 5px;
}
</style>
