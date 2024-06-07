<template>
  <div class="grafico">
    <div class="spinner-dates" v-if="!data">
      <h2>cargando información...</h2>
    </div>
    <h2 v-else>Plazo Fijo</h2>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useGetData } from "../composables/useGetData";
import {
  Chart,
  registerables,
  type ChartData,
  type ChartOptions,
} from "chart.js";

Chart.register(...registerables);

const { getData, data } = useGetData();

const myChart = ref<HTMLCanvasElement | null>(null); //Aseguro que sea de tipo HTMLCanvasElement o null.
const plazoFijo = ref<any[]>([]);
// Función para inicializar el gráfico
const initializeChart = (chartData: ChartData<"bar">) => {
  if (myChart.value) {
    new Chart(myChart.value, {
      type: "bar",
      data: chartData,
      options: {
        responsive: true,
        indexAxis: "y",
      } as ChartOptions<"bar">,
    });
  }
};

// Watch para detectar cambios en los datos y actualizar el gráfico
watch(
  data,
  (newData) => {
    if (Array.isArray(newData) && newData.length > 0) {
      plazoFijo.value = newData;
      const labels = plazoFijo.value.map((plazo: any) => plazo.entidad); // Fecha de los datos

      // Valor de los datos tnaClientes.
      const tnaClientes = plazoFijo.value.map(
        (plazo: any) => plazo.tnaClientes
      );

      // Valor de los datos tnaNoClientes.
      const tnaNoClientes = plazoFijo.value.map(
        (plazo: any) => plazo.tnaNoClientes
      );

      const chartData: ChartData<"line"> = {
        labels,
        datasets: [
          {
            label: "Clientes",
            backgroundColor: "#1976D2",
            data: tnaClientes,
            borderWidth: 0,
            fill: true,
          },
          {
            label: "No clientes",
            backgroundColor: "#ffffff",
            data: tnaNoClientes,
            borderWidth: 0,
            fill: true,
          },
        ],
      };

      initializeChart(chartData);
    }
  },
  { immediate: true }
);
onMounted(() => {
  getData("https://api.argentinadatos.com/v1/finanzas/tasas/plazoFijo");
});
</script>

<style scoped>
h2 {
  color: #e6ae4a;
}

.grafico {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px;
  padding: 15px;
  width: 100%;
  border: 1px solid #1976d2;
  background-color: #212121;
}
</style>
