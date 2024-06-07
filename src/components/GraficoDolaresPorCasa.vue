<template>
  <div class="grafico">
    <div class="spinner-dates" v-if="!data">
      <h2>cargando información...</h2>
    </div>
    <select class="seleccionarCasa" v-model="casaSeleccionada" v-else>
      <option
        class="opcion"
        v-for="casa in casasDisponibles"
        :key="casa"
        :value="casa"
      >
        {{ casa }}
      </option>
    </select>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { useGetData } from "@/composables/useGetData";
import { ref, onMounted, watch } from "vue";
import {
  Chart,
  registerables,
  type ChartData,
  type ChartOptions,
} from "chart.js";

Chart.register(...registerables);

const { getData, data } = useGetData();
const myChart = ref<HTMLCanvasElement | null>(null); // Aseguro que sea de tipo HTMLCanvasElement o null.
const chartInstance = ref<Chart | null>(null); // Almacena la instancia actual del gráfico, permitiendo su destrucción y recreación cuando sea necesario.
const dolares = ref<any[]>([]);
const casasDisponibles = ref<string[]>([]);
const casaSeleccionada = ref<string | null>(null);

// Función para inicializar el gráfico
const initializeChart = (chartData: ChartData<"line">) => {
  if (chartInstance.value) {
    chartInstance.value.destroy(); // Destruir el gráfico anterior
  }

  if (myChart.value) {
    chartInstance.value = new Chart(myChart.value, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
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
      dolares.value = newData;

      // Obtener tipos de casa disponibles
      const casas = Array.from(
        new Set(dolares.value.map((dolar: any) => dolar.casa))
      );
      casasDisponibles.value = casas;
      if (!casaSeleccionada.value) {
        casaSeleccionada.value = casas[0];
      }
    }
  },
  { immediate: true }
);

// Watch para detectar cambios en el tipo de casa seleccionado y actualizar el gráfico
watch(
  casaSeleccionada,
  (nuevaCasa) => {
    if (nuevaCasa !== null) {
      const filteredData = dolares.value.filter(
        (dolar: any) => dolar.casa === nuevaCasa
      );

      const labels = filteredData.map((dolar: any) => dolar.fecha);
      const dolarCompra = filteredData.map((dolar: any) => dolar.compra);
      const dolarVenta = filteredData.map((dolar: any) => dolar.venta);
      const chartData: ChartData<"line"> = {
        labels,
        datasets: [
          {
            label: "Compra",
            backgroundColor: "green",
            borderColor: "#1976D2",
            data: dolarCompra,
            borderWidth: 0,
          },
          {
            label: "Venta",
            backgroundColor: "red",
            borderColor: "red",
            data: dolarVenta,
            borderWidth: 0,
          },
        ],
      };

      initializeChart(chartData);
    }
  },
  { immediate: true }
);

onMounted(() => {
  getData("https://api.argentinadatos.com/v1/cotizaciones/dolares");
});
</script>

<style scoped>
.grafico {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  border: 1px solid #1976d2;
  background-color: #212121;
}
.seleccionarCasa {
  color: #e6ae4a;
  background-color: #1976d2;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  overflow: hidden;
}

.seleccionarCasa:hover {
  opacity: 0.9;
}

.opcion {
  cursor: pointer;
  background-color: #212121;
}
</style>
