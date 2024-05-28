<template>
  <div class="grafico">
    <h2>Índice UVA</h2>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import {
  Chart,
  registerables,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { useGetData } from "@/composables/useGetData";

Chart.register(...registerables);

const myChart = ref(null);
const indice = ref<any[]>([]);
const { getData, data } = useGetData();

// Función para inicializar el gráfico
const initializeChart = (chartData: ChartData<"line">) => {
  if (myChart.value) {
    new Chart(myChart.value, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        interaction: {
          intersect: false,
        },
      } as ChartOptions<"line">,
    });
  }
};

// Watch para detectar cambios en los datos y actualizar el gráfico
watch(
  data,
  (newData) => {
    if (Array.isArray(newData) && newData.length > 0) {
      indice.value = newData;
      const labels = indice.value.map((indi: any) => indi.fecha); // Fecha de los datos
      const datasetData = indice.value.map((indi: any) => indi.valor); // Valor de los datos.
      const chartData: ChartData<"line"> = {
        labels,
        datasets: [
          {
            label: "Índice UVA",
            backgroundColor: "#1976D2",
            data: datasetData,
            borderWidth: 0,
            radius: 0,
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
  getData("https://api.argentinadatos.com/v1/finanzas/indices/uva");
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
  width: 100%;
  border: 1px solid #1976d2;
  background-color: #212121;
}
</style>
