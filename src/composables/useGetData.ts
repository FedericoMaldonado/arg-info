import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
  const data = ref<any>();

  const getData = async (url: any) => {
    try {
      const response = await axios.get(url);
      data.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data,
    getData,
  };
};
