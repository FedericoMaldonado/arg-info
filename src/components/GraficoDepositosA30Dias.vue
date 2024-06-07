<template>
  <div class="grafico">
    <div class="spinner-dates" v-if="!data">
      <h2>cargando información...</h2>
    </div>

    <h2 v-else>Depósito a 30 dias</h2>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useGetData } from "@/composables/useGetData";

const { getData, data } = useGetData();

import {
  Chart,
  registerables,
  type ChartData,
  type ChartOptions,
} from "chart.js";

Chart.register(...registerables);

const myChart = ref(null);
const deposito = ref<any[]>([]);

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
      deposito.value = newData;
      const labels = deposito.value.map((depo: any) => depo.fecha); // Fecha de los datos
      const datasetData = deposito.value.map((depo: any) => depo.valor); // Valor de los datos.
      const chartData: ChartData<"line"> = {
        labels,
        datasets: [
          {
            label: "Despósito a 30 días",
            backgroundColor: "#1976D2",
            data: datasetData,
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
  getData("https://api.argentinadatos.com/v1/finanzas/tasas/depositos30Dias");
});

console.log(data);
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
