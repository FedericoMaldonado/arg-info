<template>
  <v-btn variant="outlined" @click="back" density="comfortable"> volver </v-btn>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const back = () => {
  router.push("/fci");
};
</script>

<style scoped>
.v-btn:hover {
  border-color: #e6ae4a;
}
</style>
