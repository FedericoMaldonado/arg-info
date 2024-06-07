<template>
  <Toolbar />
  <h1>Feriados 2024</h1>

  <Calendar />
</template>

<script setup lang="ts">
//  Exporto e importo el componente de Toolbar para utilizarlo en la vista
import Toolbar from "../components/Toolbar.vue";
import Calendar from "@/components/Calendar.vue";
</script>

<style scoped>
h1 {
  padding-top: 100px;
}
</style>
