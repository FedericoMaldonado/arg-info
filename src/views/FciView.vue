<template>
  <Toolbar />
  <h1>FCI</h1>

  <div class="container-global">
    <section class="container">
      <article class="container-article">
        <div class="container-finance">
          <div class="cards">
            <v-card
              class="mx-auto"
              id="card"
              elevation="8"
              color="#1976D2"
              max-width="250"
            >
              <v-card-item>
                <v-card-title> Mercado de dinero </v-card-title>
              </v-card-item>
              <v-card-text>
                Devuelve los valores de Mercado de Dinero de los Fondos Comunes
                de Inversión.
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-5"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/mercadodedinero"> Ver información </RouterLink>
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
                <v-card-title> Renta variable </v-card-title>
              </v-card-item>
              <v-card-text>
                Devuelve los valores de Renta Variable de los Fondos Comunes de
                Inversión.
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-10"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/rentavariable"> Ver información </RouterLink>
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
                <v-card-title> Renta fija </v-card-title>
              </v-card-item>
              <v-card-text>
                Devuelve los valores de Renta Fija de los Fondos Comunes de
                Inversión.
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-7"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/rentafija"> Ver información </RouterLink>
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
                <v-card-title> Renta mixta </v-card-title>
              </v-card-item>
              <v-card-text>
                Devuelve los valores de Renta Mixta de los Fondos Comunes de
                Inversión.
              </v-card-text>
              <v-btn
                class="d-flex ga-2 mt-7"
                size="small"
                color="#212121"
                rounded="0"
              >
                <RouterLink to="/rentamixta"> Ver información </RouterLink>
              </v-btn>
            </v-card>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "../components/Toolbar.vue";
</script>

<style scoped>
h1 {
  margin-top: 50px;
}

.container-global {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

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

.container-finance {
  display: flex;
  flex-direction: column;
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

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
