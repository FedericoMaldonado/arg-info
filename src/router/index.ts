import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/feriados",
      name: "FeriadosView",
      component: () => import("@/views/FeriadosView.vue"),
    },
    {
      path: "/presidentes",
      name: "Presidentes",
      component: () => import("@/views/PresidentesView.vue"),
    },
    {
      path: "/dolares",
      name: "Dolares",
      component: () => import("@/views/DolaresView.vue"),
    },
    {
      path: "/dolaresporcasa",
      name: "DolaresPorCasaView",
      component: () => import("@/views/DolaresPorCasaView.vue"),
    },
    {
      path: "/indices",
      name: "IndicesView",
      component: () => import("@/views/IndicesView.vue"),
    },
    {
      path: "/tasas",
      name: "TasasView.vue",
      component: () => import("@/views/TasasView.vue"),
    },
    {
      path: "/rendimientos",
      name: "RendimientosView.vue",
      component: () => import("@/views/RendimientosView.vue"),
    },
    {
      path: "/fci",
      name: "FciView.vue",
      component: () => import("@/views/FciView.vue"),
    },
  ],
});

export default router;
