import axios from "axios";
import { ref } from "vue";

// Exporto la funcion para poder utilizarla dinamicamente en distintos componentes.
export const useGetData = () => {
  const data = ref<any>(); //Guarda los datos obtenidos de la API.

  // getData recibe como parametro una url de la api deaseada a utilizar.
  const getData = async (url: any) => {
    try {
      const response = await axios.get(url);
      data.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // Retorno la funcion getData y data para poder utilizarla en los demas componentes.
  return {
    data,
    getData,
  };
};
