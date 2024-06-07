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
              <!-- container de mercado de dinero-->
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
              <!-- container de ranta variable-->
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
              <!-- container de renta fija-->
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
              <!-- container de renta mixta -->
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

  <div class="container-global-fci">
    <!--Container de fondos comunes de inversion-->
    <div class="descripciones">
      <h2>¿Que son los Fondos Comunes de Inversión (FCI) en Argentina?</h2>
      <p>
        Los Fondos Comunes de Inversión (FCI) en Argentina son vehículos de
        inversión colectiva que agrupan el capital de varios inversores para
        invertir en diferentes tipos de activos financieros. Estos fondos están
        gestionados por administradoras profesionales y ofrecen a los inversores
        la posibilidad de diversificar sus inversiones sin necesidad de
        gestionar directamente los activos.
      </p>

      <!-- Container de paneles -->
      <div class="container-paneles">
        <h3>Tipos de Fondos Comunes de Inversión (FCI) en Argentina:</h3>
        <v-expansion-panels class="paneles" bg-color="#FFFFFF00">
          <v-expansion-panel
            class="panel"
            v-for="(item, index) in informacionFCI"
            :key="index"
            :title="item?.title"
            @click="mostrarPanel(index)"
            v-model="activar"
          >
            <p class="info-panel" v-show="activar[index]">
              <strong id="color-title"> Descripcion:</strong>
              {{ item?.descripcion }}
            </p>

            <p class="info-panel" v-show="activar[index]">
              <strong id="color-title"> Objetivo:</strong> {{ item?.objetivo }}
            </p>

            <p class="info-panel" v-show="activar[index]">
              <strong id="color-title"> Perfil del Inversor:</strong>
              {{ item?.perfilInversor }}
            </p>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>

    <!--Container de los terminos y significados de los FCI-->
    <div class="descripciones">
      <h2>¿Cuales son los significados de los terminos en FCI?</h2>
      <p>
        En los Fondos Comunes de Inversión (FCI) de Argentina, los términos
        horizonte, CCP, VCP y patrimonio tienen significados específicos. Estos
        términos son fundamentales para entender cómo funcionan los fondos
        comunes de inversión y evaluar su desempeño y adecuación a las
        necesidades del inversor.
      </p>

      <!-- Container de paneles -->
      <div class="container-paneles">
        <h3>Tipos de Fondos Comunes de Inversión (FCI) en Argentina:</h3>
        <v-expansion-panels class="paneles" bg-color="#FFFFFF00">
          <v-expansion-panel
            class="panel"
            v-for="(item, index) in significadosTerminos"
            :key="index"
            :title="item.title"
            @click="mostrarPanelTerminos(index)"
            v-model="activarTerminos"
          >
            <p class="info-panel" v-show="activarTerminos[index]">
              {{ item?.horizonte }}
            </p>

            <p class="info-panel" v-show="activarTerminos[index]">
              {{ item.vcp }}
            </p>
            <p class="info-panel" v-show="activarTerminos[index]">
              {{ item.ccp }}
            </p>

            <p class="info-panel" v-show="activarTerminos[index]">
              {{ item?.patrimonio }}
            </p>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Toolbar from "../components/Toolbar.vue";

// Arreglos que almacenan la información de los paneles.
const informacionFCI = ref([
  {
    title: "FCI DE MERCADO DE DINERO",
    descripcion:
      " Invierten principalmente en instrumentos de alta liquidez y bajo riesgo, como plazos fijos, letras del Tesoro, y otros instrumentos del mercado monetario.",
    objetivo:
      "Mantener la liquidez y preservar el capital con una baja volatilidad.",
    perfilInversor:
      "Conservador, que busca una inversión de corto plazo con bajo riesgo.",
  },
  ,
  {
    title: "FCI DE RENTA FIJA",
    descripcion:
      "Invierten en bonos y títulos de deuda, tanto públicos como privados, con el objetivo de generar ingresos regulares a través de los intereses.",
    objetivo:
      "Obtener un flujo de ingresos predecible y conservar el capital a lo largo del tiempo.",
    perfilInversor:
      "Moderado a conservador, que busca una combinación de seguridad y rendimiento regular.",
  },
  {
    title: "FCI DE RENTA VARIABLE",
    descripcion:
      "Invierten principalmente en acciones de empresas, tanto nacionales como internacionales, buscando beneficiarse del crecimiento del capital a largo plazo.",
    objetivo:
      "Obtener una apreciación del capital a través del aumento en el valor de las acciones.",
    perfilInversor:
      "Agresivo, que está dispuesto a asumir mayores riesgos a cambio de un potencial de rendimiento más alto.",
  },
  {
    title: "FCI DE RENTA MIXTA",
    descripcion:
      "Combinan inversiones en renta fija y renta variable. La proporción de cada tipo de activo puede variar dependiendo de la estrategia del fondo.",
    objetivo:
      "Lograr un equilibrio entre crecimiento del capital y generación de ingresos, ajustando el nivel de riesgo.",
    perfilInversor:
      "Moderado, que busca una diversificación y está dispuesto a asumir un nivel medio de riesgo para obtener rendimientos equilibrados.",
  },
]);
const significadosTerminos = ref([
  {
    title: "HORIZONTE",
    horizonte:
      "En el contexto de los FCI, el horizonte se refiere al período de tiempo durante el cual se espera que el inversor mantenga su inversión en el fondo. Este horizonte temporal puede ser corto, medio o largo plazo, dependiendo del tipo de fondo y de los objetivos de inversión del mismo. Por ejemplo, un fondo de renta fija a corto plazo puede tener un horizonte de inversión de uno a tres años, mientras que un fondo de acciones puede tener un horizonte de inversión de más de cinco años.",
  },
  {
    title: "VCP",
    vcp: "El VCP, o Valor de la Cuotaparte, es el valor de una cuota de participación en el fondo. Se calcula dividiendo el patrimonio neto del fondo por el número total de cuotas en circulación. El VCP varía diariamente según las fluctuaciones en el valor de los activos del fondo y es un indicador clave para los inversores, ya que refleja el rendimiento de su inversión.",
  },
  {
    title: "CCP",
    ccp: "El CCP es el Cuotapartista, es decir, el inversor que posee participaciones o cuotas en el fondo común de inversión. Cada cuota representa una fracción proporcional del total del patrimonio del fondo. Los cuotapartistas tienen derechos sobre los beneficios generados por el fondo, así como sobre la parte del patrimonio neto que les corresponde.",
  },
  {
    title: "PATRIMONIO",
    patrimonio:
      "En el contexto de los FCI, el patrimonio se refiere al valor total de los activos administrados por el fondo, menos los pasivos. Este patrimonio está compuesto por las inversiones realizadas con los aportes de los cuotapartistas. El valor del patrimonio fluctúa según el rendimiento de las inversiones del fondo y las entradas y salidas de dinero por parte de los cuotapartistas.",
  },
]);

// arreglo de booleanos, donde cada índice corresponde al estado de un panel específico.
const activar = ref<boolean[]>([]);
const activarTerminos = ref<boolean[]>([]);

//se encarga de actualizar el estado del panel correspondiente al índice que se recibe como parámetro. Además, asegura que solo un panel esté activo a la vez, cerrando los demás paneles.
const mostrarPanel = (index: number) => {
  activar.value = informacionFCI.value.map((_, i) =>
    i === index ? !activar.value[i] : false
  );
};

//se encarga de actualizar el estado del panel correspondiente al índice que se recibe como parámetro. Además, asegura que solo un panel esté activo a la vez, cerrando los demás paneles.
const mostrarPanelTerminos = (index: number) => {
  activarTerminos.value = significadosTerminos.value.map((_, i) =>
    i === index ? !activarTerminos.value[i] : false
  );
};
</script>

<style scoped>
h1 {
  padding-top: 100px;
}

.container-global {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* STYLES OF CARDS */
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

.container-global-fci {
  display: flex;
  justify-content: center;
}

.descripciones {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #212121;
  border: 1px solid #1976d2;
  text-shadow: 2px 2px 4px #000000;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
}

.descripciones h2 {
  color: #e6ae4a;
}

.descripciones p {
  font-size: 18px;
}

/* STYLES OF PANELS */
.container-paneles {
  display: flex;

  flex-direction: column;
  margin-top: 35px;
}

.paneles {
  padding: 10px;
}

.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #e6ae4a;
  border-left: 5px solid #1976d2;
  font-size: 18px;
}

.info-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  gap: 20px;
  padding: 10px;
}

#color-title {
  color: #1976d2;
}

/* RESPONSIVE */
@media (max-width: 615px) {
  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .container-global-fci {
    display: flex;
    flex-wrap: wrap;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
