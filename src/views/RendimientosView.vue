<template>
  <Toolbar />
  <h1>Rendimientos</h1>
  <article class="container-principal">
    <v-select
      label="Seleccionar moneda"
      :items="['buenbit', 'fiwind', 'letsbit', 'belo', 'lemoncash', 'ripio']"
      v-model="selectedOption"
      variant="outlined"
      color="#e6ae4a"
    ></v-select>

    <v-container class="container-criptos">
      <section class="container-info">
        <p>
          <strong :class="`pregunta`"
            >¿Que es (APY) en criptomonedas?<br
          /></strong>
          El Annual Percent Yield (APY) es una medida que se usa para calcular
          el interés que cierta inversión va a dejar a lo largo de un año.
        </p>
      </section>

      <section
        class="container-tabla"
        v-for="moneda in filteredMoney"
        :key="moneda"
      >
        <h2>{{ moneda.entidad.toUpperCase() }}</h2>

        <v-table class="tabla">
          <thead>
            <tr>
              <th class="text-center">Moneda</th>
              <th class="text-center">Apy</th>
              <th class="text-center">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="value in moneda.rendimientos" :key="value">
              <td class="text-center">{{ value.moneda }}</td>
              <td class="text-center">{{ value.apy }}</td>
              <td class="text-center">{{ value.fecha }}</td>
            </tr>
          </tbody>
        </v-table>
      </section>
    </v-container>
  </article>
</template>

<script setup lang="ts">
import Toolbar from "../components/Toolbar.vue";
import { ref, computed } from "vue";
import { useGetData } from "@/composables/useGetData";
const { getData, data } = useGetData();

const selectedOption = ref("buenbit");

//Filtro los nombres de las monedas en las opciones del v-select
const filteredMoney = computed(() => {
  if (data.value && Array.isArray(data.value)) {
    return data.value.filter((moneda: any) => {
      return moneda.entidad === selectedOption.value;
    });
  }
  return [];
});

getData("https://api.argentinadatos.com/v1/finanzas/rendimientos");
console.log(data);
</script>

<style scoped>
h1 {
  padding-top: 50px;
}
.container-criptos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.container-info {
  display: flex;
  text-align: center;
  justify-content: center;
  border: 1px solid #1976d2;
  background-color: #212121;
  width: 100%;
  padding: 10px;
  font-size: 20px;
}

.pregunta {
  color: #e6ae4a;
}

.container-tabla {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
}

.container-tabla h2 {
  margin: 10px;
}

.tabla {
  border: 1px solid #1976d2;
  background-color: #212121;
  border-radius: 4px;
}

.tabla th {
  color: #e6ae4a;
}

.tabla td {
  color: #ffffff;
}

thead {
  font-size: 20px;
}

tbody td,
thead th {
  border: 1px solid #1976d2;
}
</style>
