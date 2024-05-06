<script setup lang="ts">
import { ref } from "vue";
const eventos = ref<string[]>(["Feriados", "Presidentes"]);
const cotiHistoricas = ref<string[]>([
  "Dólares",
  "Dólares por casa",
  "Dólar por casa y fecha",
]);

const finanzas = ref<string[]>(["Índices", "Tasas", "Rendimientos", "FCI"]);
</script>

<template>
  <v-toolbar density="default" :elevation="8" color="#1976D2">
    <!-- <v-img src="/images/logo-original.png" max-height="120" contain></v-img> -->
    <!-- <v-app-bar-nav-icon
      ><img src="/public/images/icon.png" height="50" contain
    /></v-app-bar-nav-icon> -->

    <v-avatar class="ml-5" image="/images/icon.png" size="50"></v-avatar>
    <v-spacer />
    <v-btn> Inicio </v-btn>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="white" v-bind="props"
          >Eventos <v-avatar image="/icon-bottom.png" size="22"
        /></v-btn>
      </template>
      <v-list base-color="#1976D2">
        <v-list-item
          v-for="(option, index) in eventos"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ option }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu class="menu">
      <template v-slot:activator="{ props }">
        <v-btn color="white" v-bind="props"
          >Cotizaciones historicas <v-avatar image="/icon-bottom.png" size="22"
        /></v-btn>
      </template>
      <v-list base-color="#1976D2">
        <v-list-item
          v-for="(option, index) in cotiHistoricas"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ option }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu class="menu">
      <template v-slot:activator="{ props }">
        <v-btn color="white" v-bind="props"
          >Finanzas <v-avatar image="/icon-bottom.png" size="22"
        /></v-btn>
      </template>
      <v-list base-color="#1976D2">
        <v-list-item
          v-for="(option, index) in finanzas"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ option }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<style scoped></style>
