<template>
  <div class="grafico">
    <select class="seleccionarAño" v-model="anioSeleccionado">
      <option
        class="opcion"
        v-for="anio in anioDisponible"
        :key="anio"
        :value="anio"
      >
        Dolares año {{ anio }}
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
const myChart = ref<HTMLCanvasElement | null>(null); //Aseguro que sea de tipo HTMLCanvasElement o null.
const chartInstance = ref<Chart | null>(null); //Almacena l instancia actual del gráfico, permitiendo su destruccion y recreación cuando sea necesario.
const dolares = ref<any[]>([]);
const anioDisponible = ref<number[]>([]);
const anioSeleccionado = ref<number | null>(null);

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

      // Obtener años disponibles
      const anios = Array.from(
        new Set(
          dolares.value.map((dolar: any) => new Date(dolar.fecha).getFullYear())
        )
      );
      anioDisponible.value = anios;
      if (!anioSeleccionado.value) {
        anioSeleccionado.value = anios[0];
      }
    }
  },
  { immediate: true }
);

// Watch para detectar cambios en el año seleccionado y actualizar el gráfico
watch(
  anioSeleccionado,
  (nuevoAnio) => {
    if (nuevoAnio !== null) {
      const filteredData = dolares.value.filter(
        (dolar: any) => new Date(dolar.fecha).getFullYear() === nuevoAnio
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

.seleccionarAño {
  color: #e6ae4a;
  background-color: #1976d2;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  overflow: hidden;
}

.seleccionarAño:hover {
  opacity: 0.9;
}

.opcion {
  cursor: pointer;
  background-color: white;
}
</style>
