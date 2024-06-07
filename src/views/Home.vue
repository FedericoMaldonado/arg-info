<template>
  <!-- Barra de navegación -->
  <v-toolbar density="default" :elevation="8" color="#1976D2">
    <v-img src="/images/logo-original.png" max-height="135" contain></v-img>
  </v-toolbar>

  <div class="global-container">
    <!-- Container de eventos -->
    <section class="container">
      <article class="container-article">
        <div class="container-events">
          <div class="tittle-events"><h1>Eventos</h1></div>
          <div class="cards">
            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> Feriados </v-card-title>
              </v-card-item>
              <v-card-text> Todos los feriados del año indicado. </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-2"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/feriados"> Ver información </RouterLink>
              </v-btn>
            </v-card>

            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> Presidentes </v-card-title>
              </v-card-item>
              <v-card-text> Todos los presidentes de la historia. </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-2"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/presidentes"> Ver información </RouterLink>
              </v-btn>
            </v-card>
          </div>
        </div>
      </article>

      <!-- Container de historical quotes -->
      <article class="container-article">
        <div class="container-historical-quotes">
          <div class="tittle-events"><h1>Cotizaciones históricas</h1></div>
          <div class="cards">
            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> Dólares </v-card-title>
              </v-card-item>
              <v-card-text>
                Devuelve una lista de cotizaciones del dólar.
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-7"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/dolares"> Ver información </RouterLink>
              </v-btn>
            </v-card>

            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> Dólares por casa </v-card-title>
              </v-card-item>
              <v-card-text>
                Devuelve las cotizaciones del dólar de la casa de cambio
                especificada.
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-2"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/dolaresporcasa"> Ver información </RouterLink>
              </v-btn>
            </v-card>
          </div>
        </div>
      </article>
      <!-- Container de finanzas -->
      <article class="container-article">
        <div class="container-finance">
          <div class="tittle-events"><h1>Finanzas</h1></div>
          <div class="cards">
            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> Índices </v-card-title>
              </v-card-item>
              <v-card-text>
                Todos los indices de inflación (mensual, interanual, UVA).
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-7"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/indices"> Ver información </RouterLink>
              </v-btn>
            </v-card>

            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> Tasas </v-card-title>
              </v-card-item>
              <v-card-text>
                Lista de tasas de plazo fijo y de interés por dépositos a 30
                días .
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-2"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/tasas"> Ver información </RouterLink>
              </v-btn>
            </v-card>
            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> Rendimientos </v-card-title>
              </v-card-item>
              <v-card-text>
                Lista de rendimientos de distintas monedas por entidad.
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-2"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/rendimientos"> Ver información </RouterLink>
              </v-btn>
            </v-card>
            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> FCI </v-card-title>
              </v-card-item>
              <v-card-text> Lista de fondos comunes de inversión. </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-7"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/fci"> Ver información </RouterLink>
              </v-btn>
            </v-card>
          </div>
        </div>
      </article>
    </section>
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="elements-footer">
      <div class="icons">
        <div v-for="icon in icons" :key="icon.image">
          <a :href="icon.link" target="_blank"><img :src="icon.image" /></a>
        </div>
      </div>
      <div class="descripcion">
        <p>Desarrollador: Federico Maldonado</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

type icons = [
  {
    image: string;
    link: string;
  },
  {
    image: string;
    link: string;
  }
];
const icons = ref<icons>([
  {
    image: "icons/github.svg",
    link: "https://github.com/FedericoMaldonado",
  },
  {
    image: "icons/linkedin.svg",
    link: "https://www.linkedin.com/in/federico-maldonado-213107225/",
  },
]);
</script>

<style scoped>
.global-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.v-card-title {
  text-align: center;
  background-color: #212121;
  color: #e6ae4a;
  border-radius: 4px;
}
.v-card-text {
  color: #ffffff;
  text-shadow: 2px 2px 4px #000000;
}

.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

/* START OF CARDS */
.container-article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #212121;
  padding: 15px;
  width: auto;
  border-radius: 4px;
  margin: 30px;
  flex-wrap: wrap;
}

.container-historical-quotes,
.container-events,
.container-finance {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

h1 {
  color: #ffffff;
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
}

.tittle-events {
  display: flex;
  justify-content: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 10px;
}

.cards a {
  display: flex;
  text-decoration: none;
  font-weight: bold;
  color: #1976d2;
}

#card:hover {
  position: relative;
  outline: 1px solid #e6ae4a;
}
/* END OF CARDS */

/* FOOTER */
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1976d2;
  text-shadow: 2px 2px 4px #000000;
  padding: 3px;
}

.icons {
  display: flex;
  justify-content: center;
}

img {
  display: flex;

  width: 35px;
  transition: 0.2s;
}
img:hover {
  transform: scale(1.1, 1.1);
  transition: 0.2s;
  cursor: pointer;
}

/* RESPONSIVE */
@media (max-width: 615px) {
  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
