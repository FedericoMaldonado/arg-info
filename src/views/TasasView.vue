<template>
  <Toolbar />
  <h1>Tasas</h1>
  <div class="container-graficos">
    <div class="graficos">
      <GraficoPlazoFijo />
      <GraficoDepositosA30Dias />
    </div>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import GraficoPlazoFijo from "@/components/GraficoPlazoFijo.vue";
import GraficoDepositosA30Dias from "@/components/GraficoDepositosA30Dias.vue";
</script>

<style scoped>
h1 {
  padding-top: 50px;
}
.container-graficos {
  display: flex;
  margin: 10px;
}

.graficos {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 5px;
}

@media (max-width: 615px) {
  .graficos {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
