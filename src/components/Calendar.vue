<template>
  <article class="container-principal">
    <v-select
      label="Buscar feriados"
      :items="['Todos', 'Pasados', 'Próximos']"
      v-model="selectedOption"
      variant="outlined"
      color="#e6ae4a"
    ></v-select>

    <v-container>
      <section
        class="container-feriados"
        v-for="feriado in filteredFeriados"
        :key="feriado.id"
      >
        <article class="contenido">
          <!-- Todos los feriados -->
          <p v-if="feriado.fecha" :class="`proximoFeriado`"></p>

          <!-- Próximos feriados -->
          <p v-if="proximoFeriado(feriado.fecha) > 0" :class="`proximoFeriado`">
            Faltan {{ proximoFeriado(feriado.fecha) }} días
          </p>

          <!-- Feriados Pasados -->
          <p
            v-else-if="proximoFeriado(feriado.fecha) < 0"
            :class="`feriadosPasados`"
          >
            Feriado Pasado
          </p>
          <p>{{ formatFecha(feriado.fecha) }}</p>
          <h3>{{ feriado.nombre }}</h3>
          <p
            :class="
              feriado.tipo == 'inamovible'
                ? 'colorinamovible'
                : 'colortransladables'
            "
          >
            {{ feriado.tipo }}
          </p>
        </article>
      </section>
    </v-container>

    <section class="container-calendar">
      <section class="calendars">
        <!-- ENERO -->
        <article class="calendar">
          <h2>Enero</h2>
          <table>
            <tr>
              <td>Lun</td>
              <td>Dom</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td id="colorinamovible">1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
            <tr>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
            </tr>
            <tr>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
            </tr>
            <tr>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>1. Año Nuevo</p>
        </article>

        <!-- FEBRERO -->
        <article class="calendar">
          <h2>Febrero</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>11</td>
              <td id="colorinamovible">12</td>
              <td id="colorinamovible">13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
            </tr>
            <tr>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
            </tr>
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>12, 13. Carnaval</p>
        </article>

        <!-- MARZO -->
        <article class="calendar">
          <h2>Marzo</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
            </tr>
            <tr>
              <td id="colorinamovible">24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td id="colorinamovible">29</td>
              <td>30</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>24. Dia Nacional de la memoria por la verdad y la justicia</p>
          <p>29. Viernes Santo</p>
        </article>

        <!-- ABRIL -->
        <article class="calendar">
          <h2>Abril</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td id="colorpuenteytransladable">1</td>
              <td id="colorinamovible">2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
            <tr>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
            </tr>
            <tr>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
            </tr>
            <tr>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <P>1. Feriado puente turístico</P>
          <P>2. Día del Veterano y de los Caídos en la Guerra de Malvinas</P>
        </article>

        <!-- MAYO -->
        <article class="calendar">
          <h2>Mayo</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td id="colorinamovible">1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
            </tr>
            <tr>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td id="colorinamovible">25</td>
            </tr>
            <tr>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>1. Día del trabajador</p>
          <p>25. Día de la Revolucion de Mayo</p>
        </article>

        <!-- JUNIO -->
        <article class="calendar">
          <h2>Junio</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
            </tr>
            <tr>
              <td>16</td>
              <td id="colorpuenteytransladable">17</td>
              <td>18</td>
              <td>19</td>
              <td id="colorinamovible">20</td>
              <td id="colorpuenteytransladable">21</td>
              <td>22</td>
            </tr>
            <tr>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
            </tr>
            <tr>
              <td>30</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>17. Paso a la Inmortalidad del General Martín Güemes</p>
          <p>20. Paso a la Inmortalidad del General Manuel Belgrano</p>
          <p>21. Feriado puente turístico</p>
        </article>

        <!-- JULIO -->
        <article class="calendar">
          <h2>Julio</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td id="colorinamovible">9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
            <tr>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
            </tr>
            <tr>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
            </tr>
            <tr>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>

              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>9. Día de la independencia</p>
        </article>

        <!-- AGOSTO -->
        <article class="calendar">
          <h2>Agosto</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td id="colorpuenteytransladable">17</td>
            </tr>
            <tr>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
            </tr>
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
            </tr>
            <tr>
              <td>&nbsp;</td>

              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>17. Paso a la Inmortalidad del Gral. José de San Martín</p>
        </article>

        <!-- SEPTIEMBRE -->
        <article class="calendar">
          <h2>Septiembre</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>

              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>No hay feriados</p>
        </article>

        <!-- OCTUBRE -->
        <article class="calendar">
          <h2>Octubre</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td id="colorpuenteytransladable">11</td>
              <td id="colorpuenteytransladable">12</td>
            </tr>
            <tr>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
            </tr>
            <tr>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
            </tr>
            <tr>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>

              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>11. Feriado puente turístico</p>
          <p>12. Día del Respeto a la Diversidad Cultural</p>
        </article>

        <!-- NOVIEMBRE -->
        <article class="calendar">
          <h2>Noviembre</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>17</td>
              <td id="colorpuenteytransladable">18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
            </tr>
            <tr>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
            </tr>
            <tr>
              <td>&nbsp;</td>

              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>18. Día de la Soberanía Nacional</p>
        </article>

        <!-- DICIEMBRE -->
        <article class="calendar">
          <h2>Diciembre</h2>
          <table>
            <tr>
              <td>Dom</td>
              <td>Lun</td>
              <td>Mar</td>
              <td>Mié</td>
              <td>Jue</td>
              <td>Vier</td>
              <td>Sáb</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr>
              <td id="colorinamovible">8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td id="colorinamovible">25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <p>8. Día de la Inmaculada Concepción de María</p>
          <p>25. Navidad</p>
        </article>
      </section>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useGetData } from "@/composables/useGetData";

const { getData, data } = useGetData();
getData("https://api.argentinadatos.com/v1/feriados/2024");

//Guarda todas las opciones que tiene el v-select.
const selectedOption = ref("Todos");

//Funcion para filtrar los feriados.
const filteredFeriados = computed(() => {
  // Verificar si data.value está definido y es un array antes de usar filter
  if (data.value && Array.isArray(data.value)) {
    return data.value.filter((feriado: any) => {
      const mostrarFeriado = proximoFeriado(feriado.fecha);

      if (selectedOption.value === "Todos") {
        return mostrarFeriado;
      } else if (selectedOption.value === "Pasados") {
        return mostrarFeriado < 0;
      } else if (selectedOption.value === "Próximos") {
        return mostrarFeriado > 0;
      }
    });
  }
});

//Funcion para ver los dias restantes de los próximos feriados.
const proximoFeriado = (fecha: string) => {
  const hoy = new Date();
  const fechaFeriado = new Date(fecha);
  const diferenciaEnMiliSegundos = fechaFeriado.getTime() - hoy.getTime();
  const diferenciasEnDias = Math.ceil(
    diferenciaEnMiliSegundos / (1000 * 60 * 60 * 24)
  );
  return diferenciasEnDias;
};

const formatFecha = (fecha: string) => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const partes = fecha.split("-");
  const anio = partes[0];
  const mes = parseInt(partes[1], 10) - 1;
  const dia = partes[2];

  return `${dia} ${meses[mes]} de ${anio}`;
};
</script>

<style scoped>
.container-principal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}

/* Diseño de los calendarios */
.container-calendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
}

.calendars {
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  justify-content: center;
  text-align: center;
  gap: 50px;

  /* max-width: 3000px; */
}
.calendar {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #e6ae4a;
}
.calendar p {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
  font-size: 18px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

table {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

table tr td {
  padding: 5px;
  margin: 0px;
  width: 52px;
  border: 1px solid #1976d2;
  background-color: #212121;
}

/* Diseño del v-select */
.v-select:hover {
  color: #e6ae4a;
}

/* Colores para los feriados del calendario */
#colorinamovible {
  background-color: rgb(69, 69, 162);
}

#colorpuenteytransladable {
  background-color: green;
}

/* Colores para los tipos de feriados */
.feriadosPasados {
  color: brown;
}

.proximoFeriado {
  color: #e6ae4a;
}

.colorinamovible {
  color: rgb(69, 69, 162);
}

.colortransladables {
  color: green;
}

.v-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  gap: 5px;
}

p {
  color: grey;
}

.container-feriados {
  display: flex;
  height: 230px;
  font-size: 17px;
  border: 1px solid #1976d2;
  border-radius: 4px;
  padding: 10px;
}

.contenido {
  display: flex;
  width: 200px;
  justify-content: space-between;
  flex-direction: column;
  text-shadow: 2px 2px 4px #000000;
}

@media (max-width: 615px) {
  .v-container {
    display: flex;
    flex-direction: column;
  }

  .container-calendar {
    display: flex;
    flex-direction: column;
  }

  .calendars {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
