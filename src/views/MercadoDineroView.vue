<template>
  <Toolbar />

  <div class="backbutton">
    <h1>Mercado de dinero</h1>
    <BackButton />
  </div>

  <!-- Mostrara un texto diciendo que la información esta cargando hasta que los datos hayan finalizados. -->
  <div class="spinner-dates" v-if="!data"><h2>cargando información...</h2></div>
  <section class="container-tabla" v-else>
    <v-table class="tabla">
      <thead>
        <tr>
          <th class="text-center">Fondo</th>
          <th class="text-center">Horizonte</th>
          <th class="text-center">Fecha</th>
          <th class="text-center">Ccp</th>
          <th class="text-center">Vcp</th>
          <th class="text-center">Patrimonio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mercado in data" :key="mercado">
          <td class="text-center">{{ mercado.fondo }}</td>

          <!-- HORIZONTE -->
          <td class="text-center" id="nohaydata" v-if="!mercado.horizonte">
            no hay horizonte
          </td>
          <td class="text-center" v-else>{{ mercado.horizonte }}</td>

          <!-- FECHA -->
          <td class="text-center" id="nohaydata" v-if="mercado.fecha === null">
            no hay fecha
          </td>
          <td class="text-center" v-else>{{ mercado.fecha }}</td>

          <!-- CCP -->
          <td class="text-center" id="nohaydata" v-if="!mercado.vcp">
            no hay ccp
          </td>
          <td class="text-center" v-else>{{ mercado.ccp }}</td>

          <!-- VCP -->
          <td class="text-center" id="nohaydata" v-if="!mercado.vcp">
            no hay vcp
          </td>
          <td class="text-center" v-else>{{ parseInt(mercado.vcp) }}</td>

          <!-- PATRIMONIO -->
          <td class="text-center" id="nohaydata" v-if="!mercado.patrimonio">
            no hay patrimonio
          </td>
          <td class="text-center" v-else>{{ parseInt(mercado.patrimonio) }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>

<script setup lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import BackButton from "@/components/BackButton.vue";
import { useGetData } from "@/composables/useGetData";
import { onMounted } from "vue";

const { getData, data } = useGetData();

// Con el onMounted aseguro que el código se ejecute despues de que el componente haya sido montado.
onMounted(() => {
  getData(
    "https://api.argentinadatos.com/v1/finanzas/fci/mercadoDinero/ultimo"
  );
});
</script>

<style scoped>
.backbutton {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 100px;
}

.container-tabla {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.tabla {
  margin: 10px;
  border: 1px solid #1976d2;
  background-color: #212121;
  border-radius: 4px;
  text-shadow: 2px 2px 4px #000000;
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

#nohaydata {
  color: red;
}
</style>
