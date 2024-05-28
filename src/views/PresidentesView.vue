<template>
  <Toolbar />
  <h1>Presidentes</h1>
  <div class="container">
    <v-table class="tabla">
      <thead :class="`orange`">
        <tr>
          <th class="text-left">Presidente</th>
          <th class="text-left">Partido</th>
          <th class="text-left">Periodo</th>
          <th class="text-left">Lugar de nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="presidente in presidentes" :key="presidente.nombre">
          <td>
            <v-avatar class="avatar" size="45">
              <v-img :src="presidente.imagen"></v-img>
            </v-avatar>
            {{ presidente.nombre }}
          </td>
          <td>{{ presidente.partido }}</td>
          <td>{{ presidente.periodo }}</td>
          <td>{{ presidente.lugar_de_nacimiento }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import { ref } from "vue";

interface Presidente {
  nombre: string;
  partido: string;
  periodo: string;
  lugar_de_nacimiento: string;
  imagen: string;
}

const presidentes = ref<Presidente[]>([
  {
    nombre: "Alberto Fernández",
    partido: "Partido Justicialista",
    periodo: "2019-2023",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/AlbertoFernandez.jpg",
  },
  {
    nombre: "Mauricio Macri",
    partido: "Propuesta Republicana",
    periodo: "2015-2019",
    lugar_de_nacimiento: "Tandil",
    imagen: "images/presidentes/MauricioMacri.jpg",
  },
  {
    nombre: "Cristina Fernández de Kirchner",
    partido: "Partido Justicialista",
    periodo: "2007-2015",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/CristinaKirchner.jpg",
  },
  {
    nombre: "Néstor Kirchner",
    partido: "Partido Justicialista",
    periodo: "2003-2007",
    lugar_de_nacimiento: "Santa Cruz",
    imagen: "images/presidentes/NestorKirchner.jpg",
  },
  {
    nombre: "Eduardo Duhalde",
    partido: "Partido Justicialista",
    periodo: "2002-2003",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/EduardoDuhalde.jpeg",
  },
  {
    nombre: "Eduardo Camaño",
    partido: "Partido Justicialista",
    periodo: "2001-2002",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/EduardoCamaño.jpg",
  },
  {
    nombre: "Adolfo Rodríguez Saá",
    partido: "Partido Justicialista",
    periodo: "2001",
    lugar_de_nacimiento: "San Luis",
    imagen: "images/presidentes/AdolfoRodríguezSaá.jpg",
  },
  {
    nombre: "Fernando de la Rúa",
    partido: "Unión Cívica Radical",
    periodo: "1999-2001",
    lugar_de_nacimiento: "Córdoba",
    imagen: "images/presidentes/FernandodelaRua.jpg",
  },
  {
    nombre: "Carlos Menem",
    partido: "Partido Justicialista",
    periodo: "1989-1999",
    lugar_de_nacimiento: "La Rioja",
    imagen: "images/presidentes/CarlosMenem.jpg",
  },
  {
    nombre: "Raúl Alfonsín",
    partido: "Unión Cívica Radical",
    periodo: "1983-1989",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/RaulAlfonsin.jpg",
  },
  {
    nombre: "Reynaldo Benito Bignone",
    partido: "Ninguno",
    periodo: "1982-1983",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/ReynaldoBignone.png",
  },
  {
    nombre: "Alfredo Oscar Saint Jean",
    partido: "Ninguno",
    periodo: "1982",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/SaintJean.jpg",
  },
  {
    nombre: "Leopoldo Fortunato Galtieri",
    partido: "Ninguno",
    periodo: "1981-1982",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/FortunatoGaltieri.jpg",
  },
  {
    nombre: "Carlos Alberto Lacoste",
    partido: "Ninguno",
    periodo: "1981",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/lacoste.jpg",
  },
  {
    nombre: "Roberto Eduardo Viola",
    partido: "Ninguno",
    periodo: "1981",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/RobertoEduardoViola.jpeg",
  },
  {
    nombre: "Jorge Rafael Videla",
    partido: "Ninguno",
    periodo: "1976-1981",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/JorgeRafaelVidela.jpg",
  },
  {
    nombre: "Isabel Perón",
    partido: "Partido Justicialista",
    periodo: "1974-1976",
    lugar_de_nacimiento: "La Rioja",
    imagen: "images/presidentes/IsabelPerón.jpg",
  },
  {
    nombre: "Juan Domingo Perón",
    partido: "Partido Justicialista",
    periodo: "1973-1974",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/JuanDomingoPerón.jpg",
  },
  {
    nombre: "Raúl Alberto Lastiri",
    partido: "Partido Justicialista",
    periodo: "1973",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/RaúlAlbertoLastiri.jpg",
  },
  {
    nombre: "Héctor José Cámpora",
    partido: "Partido Justicialista",
    periodo: "1973",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/HectorJoseCampora.png",
  },
  {
    nombre: "Alejandro Agustín Lanusse",
    partido: "Ninguno",
    periodo: "1971-1973",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/AlejandroAgustínLanusse.jpg",
  },
  {
    nombre: "Roberto Marcelo Levingston",
    partido: "Ninguno",
    periodo: "1970-1971",
    lugar_de_nacimiento: "San Luis",
    imagen: "images/presidentes/RobertoMarceloLevingston.jpg",
  },
  {
    nombre: "Juan Carlos Onganía",
    partido: "Ninguno",
    periodo: "1966-1970",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/JuanCarlosOnganía.jpg",
  },
  {
    nombre: "Arturo Umberto Illia",
    partido: "Unión Cívica Radical del Pueblo",
    periodo: "1963-1966",
    lugar_de_nacimiento: "Córdoba",
    imagen: "images/presidentes/ArturoUmbertoIllia.jpg",
  },
  {
    nombre: "José María Guido",
    partido: "Unión Cívica Radical del Pueblo",
    periodo: "1962-1963",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/JoséMaríaGuido.jpg",
  },
  {
    nombre: "Arturo Frondizi",
    partido: "Unión Cívica Radical Intransigente",
    periodo: "1958-1962",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/ArturoFrondizi.jpg",
  },
  {
    nombre: "Pedro Eugenio Aramburu",
    partido: "Ninguno",
    periodo: "1955-1958",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/PedroEugenioAramburu.jpg",
  },
  {
    nombre: "Eduardo Lonardi",
    partido: "Ninguno",
    periodo: "1955",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/EduardoLonardi.webp",
  },
  {
    nombre: "Juan Domingo Perón",
    partido: "Partido Justicialista",
    periodo: "1946-1955",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/JuanDomingoPerón.jpg",
  },
  {
    nombre: "Edelmiro Farrell",
    partido: "Ninguno",
    periodo: "1944-1946",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/EdelmiroJuliánFarrell.jpg",
  },
  {
    nombre: "Pedro Pablo Ramírez",
    partido: "Ninguno",
    periodo: "1943-1944",
    lugar_de_nacimiento: "San Miguel de Tucumán",
    imagen: "images/presidentes/PedroPabloRamírez.webp",
  },
  {
    nombre: "Ramón S. Castillo",
    partido: "Concordancia",
    periodo: "1942-1943",
    lugar_de_nacimiento: "Catamarca",
    imagen: "images/presidentes/RamonCastillo.jpg",
  },
  {
    nombre: "Roberto Marcelino Ortiz",
    partido: "Concordancia",
    periodo: "1938-1942",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/RobertoMaríaOrtiz.jpg",
  },
  {
    nombre: "Agustín Pedro Justo",
    partido: "Concordancia",
    periodo: "1932-1938",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/AgustínPedroJusto.jpg",
  },
  {
    nombre: "José Félix Uriburu",
    partido: "Ninguno",
    periodo: "1930-1932",
    lugar_de_nacimiento: "Salta",
    imagen: "images/presidentes/JoséEvaristoUriburu.jpg",
  },
  {
    nombre: "Hipólito Yrigoyen",
    partido: "Unión Cívica Radical",
    periodo: "1928-1930",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/HipólitoYrigoyen.jpg",
  },
  {
    nombre: "Marcelo T. de Alvear",
    partido: "Unión Cívica Radical",
    periodo: "1922-1928",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/MarceloTorcuatodeAlvear.jpg",
  },
  {
    nombre: "Hipólito Yrigoyen",
    partido: "Unión Cívica Radical",
    periodo: "1916-1922",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/HipólitoYrigoyen.jpg",
  },
  {
    nombre: "Victorino de la Plaza",
    partido: "Partido Autonomista Nacional",
    periodo: "1914-1916",
    lugar_de_nacimiento: "Salta",
    imagen: "images/presidentes/VictorinodelaPlaza.jpg",
  },
  {
    nombre: "Roque Sáenz Peña",
    partido: "Partido Autonomista Nacional",
    periodo: "1910-1914",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/RoqueSáenzPeña.jpg",
  },
  {
    nombre: "José Figueroa Alcorta",
    partido: "Partido Autonomista Nacional",
    periodo: "1906-1910",
    lugar_de_nacimiento: "Córdoba",
    imagen: "images/presidentes/JoséFigueroaAlcorta.jpg",
  },
  {
    nombre: "Manuel Quintana",
    partido: "Partido Autonomista Nacional",
    periodo: "1904-1906",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/ManuelQuintana.JPG",
  },
  {
    nombre: "Julio Argentino Roca",
    partido: "Partido Autonomista Nacional",
    periodo: "1898-1904",
    lugar_de_nacimiento: "Tucumán",
    imagen: "images/presidentes/JulioArgentinoRoca.jpg",
  },
  {
    nombre: "José Evaristo Uriburu",
    partido: "Partido Autonomista Nacional",
    periodo: "1895-1898",
    lugar_de_nacimiento: "Salta",
    imagen: "images/presidentes/JoséEvaristoUriburu.jpg",
  },
  {
    nombre: "Luis Sáenz Peña",
    partido: "Partido Autonomista Nacional",
    periodo: "1892-1895",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/LuisSáenzPeña.jpg",
  },
  {
    nombre: "Carlos Pellegrini",
    partido: "Partido Autonomista Nacional",
    periodo: "1890-1892",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/CarlosPellegrini.jpg",
  },
  {
    nombre: "Miguel Juárez Celman",
    partido: "Partido Autonomista Nacional",
    periodo: "1886-1890",
    lugar_de_nacimiento: "Córdoba",
    imagen: "images/presidentes/MiguelJuárezCelman.jpg",
  },
  {
    nombre: "Julio Argentino Roca",
    partido: "Partido Autonomista Nacional",
    periodo: "1880-1886",
    lugar_de_nacimiento: "Tucumán",
    imagen: "images/presidentes/JulioArgentinoRoca.jpg",
  },
  {
    nombre: "Nicolás Avellaneda",
    partido: "Partido Nacionalista",
    periodo: "1874-1880",
    lugar_de_nacimiento: "Tucumán",
    imagen: "images/presidentes/NicolásAvellaneda.jpg",
  },
  {
    nombre: "Domingo Faustino Sarmiento",
    partido: "Partido Nacionalista",
    periodo: "1868-1874",
    lugar_de_nacimiento: "San Juan",
    imagen: "images/presidentes/DomingoFaustinoSarmiento.webp",
  },
  {
    nombre: "Bartolomé Mitre",
    partido: "Partido Nacionalista",
    periodo: "1862-1868",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/BartoloméMitre.jpg",
  },
  {
    nombre: "Juan Esteban Pedernera",
    partido: "Partido Federal",
    periodo: "1861",
    lugar_de_nacimiento: "San Luis",
    imagen: "images/presidentes/Pedernera.jpg",
  },
  {
    nombre: "Santiago Derqui",
    partido: "Partido Federal",
    periodo: "1860-1861",
    lugar_de_nacimiento: "Córdoba",
    imagen: "images/presidentes/SantiagoDerqui.jpg",
  },
  {
    nombre: "Justo José de Urquiza",
    partido: "Partido Federal",
    periodo: "1854-1860",
    lugar_de_nacimiento: "Entre Ríos",
    imagen: "images/presidentes/JustoJosédeUrquiza.jpg",
  },
  {
    nombre: "Vicente López y Planes",
    partido: "Ninguno",
    periodo: "1827",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/VicenteLópezyPlanes.jpg",
  },
  {
    nombre: "Bernardino Rivadavia",
    partido: "Ninguno",
    periodo: "1826-1827",
    lugar_de_nacimiento: "Buenos Aires",
    imagen: "images/presidentes/BernardinoRivadavia.jpg",
  },
]);
</script>

<style scoped>
h1 {
  padding-top: 50px;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  text-align: left;
  width: auto;
  border: 1px solid #1976d2;
}

.tabla {
  background-color: #212121;
  color: #e6ae4a;
}

thead {
  font-size: 20px;
  margin: 0px;
  padding: 0px;
}
.avatar {
  margin: 5px;
}

tbody td {
  color: white;
  border: 1px solid #1976d2;
}
</style>
