<template>
  <!-- MENU PARA DISPOSITIVOS MOVILES -->

  <v-card v-if="isMobile" class="menu-mobile">
    <v-layout>
      <div class="container-logo">
        <img src="/public/images/logo-original.png" class="logo" />
      </div>
      <div class="container-btn-inicio">
        <RouterLink to="/" id="item-router"
          ><v-btn class="btn-inicio" variant="outlined"
            >Inicio</v-btn
          ></RouterLink
        >
      </div>
      <div>
        <!-- MENU DESPLEGABLE -->
        <v-navigation-drawer v-model="drawer" temporary color="#1976d2">
          <div class="container-btn-exit" @click="exit">
            <p>salir</p>
            <img src="/public/icons/icon-exit.svg" id="btn-exit" />
          </div>
          <v-list-item title="Eventos"></v-list-item>

          <v-list density="compact" nav>
            <router-link to="/feriados" id="item-router">
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Feriados"
              ></v-list-item>
            </router-link>

            <router-link to="/presidentes" id="item-router">
              <v-list-item
                prepend-icon="mdi-forum"
                title="Presidentes"
              ></v-list-item>
            </router-link>
          </v-list>

          <v-divider></v-divider>
          <v-list-item title="Cotizaciones Historícas"></v-list-item>
          <v-list density="compact" nav>
            <router-link to="/dolares" id="item-router">
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Dolares"
              ></v-list-item>
            </router-link>

            <router-link to="/dolaresporcasa" id="item-router">
              <v-list-item
                prepend-icon="mdi-forum"
                title="Dolares por casa"
              ></v-list-item>
            </router-link>
          </v-list>

          <v-divider></v-divider>
          <v-list-item title="Finanzas"></v-list-item>
          <v-list density="compact" nav>
            <router-link to="/indices" id="item-router">
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Indices"
              ></v-list-item>
            </router-link>
          </v-list>
          <v-divider></v-divider>
          <v-list-item title="Tasas"></v-list-item>
          <v-list density="compact" nav>
            <router-link to="/tasas" id="item-router">
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Plazo fijo y Deposito a 30 días"
              ></v-list-item>
            </router-link>
          </v-list>
          <v-divider></v-divider>
          <v-list-item title="Rendimientos"></v-list-item>
          <v-list density="compact" nav>
            <router-link to="/rendimientos" id="item-router">
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Entidades"
              ></v-list-item>
            </router-link>
          </v-list>

          <v-divider></v-divider>
          <v-list-item title="FCI"></v-list-item>
          <v-list density="compact" nav>
            <router-link to="/fci" id="item-router">
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Fondos Comunes de Inversión"
              ></v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
      </div>
      <v-main style="height: 50px">
        <div class="d-flex justify-end align-center h-100">
          <v-btn
            id="buttonMenu"
            color="#1976d2"
            @click.stop="drawer = !drawer"
            class="d-flex mr-2"
          >
            <img src="/public/icons/icon-menu.svg" class="icon-menu" />
          </v-btn>
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMobile = ref(true);
const drawer = ref(false);

const exit = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped>
.menu-mobile {
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  background-color: #1976d2;
  width: 100%;
  padding: 5px;
  z-index: 1000;
}
.btn-inicio {
  background-color: #1976d2;
  color: #e6ae4a;
  font-weight: bold;
}

.v-layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.container-btn-inicio {
  display: flex;
  flex-wrap: wrap;

  margin-left: 2px;
}

.container-logo {
  display: flex;
  position: fixed;
  flex-wrap: wrap;
  color: white;
  align-items: center;
}
.logo {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  padding: 4px;
}
.container-logo h1 {
  font-size: 20px;
}

.container-btn-exit {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  transition: 0.2s;
}
.container-btn-exit p {
  color: #e6ae4a;
}
#btn-exit,
.icon-menu {
  display: flex;
  padding: 5px;
  width: 40px;
  text-shadow: 2px 2px 4px #000000;
}

.container-btn-exit:hover {
  transform: scale(1.1);
  transition: 0.2s;
}

#item-router {
  display: flex;
  color: #e6ae4a;
}
#item-router:hover {
  background-color: #212121;
  border-radius: 4px;
  text-shadow: 2px 2px 4px #000000;
  box-shadow: 2px 2px 4px #000000;
}
a {
  text-decoration: none;
  color: #1976d2;
}

a:hover {
  color: #e6ae4a;
}
</style>
