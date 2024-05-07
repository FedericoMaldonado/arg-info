<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <v-toolbar density="default" :elevation="8" color="#1976D2">
    <v-avatar class="ml-5" image="/images/icon.png" size="50"></v-avatar>
    <v-spacer />
    <RouterLink to="/"> <v-btn class="btn-inicio"> Inicio </v-btn></RouterLink>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="white" v-bind="props"
          >Eventos <v-avatar image="/icon-bottom.png" size="22"
        /></v-btn>
      </template>

      <v-list base-color="#1976D2">
        <v-list-item>
          <router-link to="/feriados">
            <v-list-item-title>Feriados</v-list-item-title>
          </router-link>
          <router-link to="/presidentes">
            <v-list-item-title class="mt-5">Presidentes</v-list-item-title>
          </router-link>
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
        <v-list-item>
          <router-link to="/dolares">
            <v-list-item-title>Dólares</v-list-item-title>
          </router-link>

          <router-link to="/dolaresporcasa">
            <v-list-item-title class="mt-5">Dólares por casa</v-list-item-title>
          </router-link>

          <router-link to="/dolaresporcasayfecha">
            <v-list-item-title class="mt-5"
              >Dólar por casa y fecha</v-list-item-title
            >
          </router-link>
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
        <v-list-item>
          <router-link to="/indices">
            <v-list-item-title>Índices</v-list-item-title>
          </router-link>

          <router-link to="/tasas">
            <v-list-item-title class="mt-5">Tasas</v-list-item-title>
          </router-link>

          <router-link to="/rendimientos">
            <v-list-item-title class="mt-5">Rendimientos</v-list-item-title>
          </router-link>

          <router-link to="/fci">
            <v-list-item-title class="mt-5">FCI</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<style scoped>
.btn-inicio {
  color: white;
}

a {
  text-decoration: none;
  color: #1976d2;
}

a:hover {
  color: #e6ae4a;
}
</style>
