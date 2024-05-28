<template>
  <Toolbar />
  <h1>Índices</h1>
  <div class="container-graficos">
    <div class="graficos">
      <GraficoInflacionMensual />
      <GraficoInflacionInteranual />
    </div>
  </div>
  <div class="graficoUVA">
    <GraficoUVA />
  </div>
</template>

<script setup lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import GraficoInflacionMensual from "@/components/GraficoInflacionMensual.vue";
import GraficoInflacionInteranual from "@/components/GraficoInflacionInteranual.vue";
import GraficoUVA from "@/components/GraficoUVA.vue";
</script>

<style scoped>
h1 {
  padding-top: 50px;
}
.container-graficos {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.graficos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 5px;
}

.graficoUVA {
  display: flex;
  justify-content: center;
  margin: 10px;
}

@media (max-width: 615px) {
  .graficos {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
