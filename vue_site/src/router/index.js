import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/audio",
    name: "Audio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Audio.vue")
  },
  {
    path: "/visual",
    name: "Visual",
    component: () => import("../views/Visual.vue")
  },

  {
    path: "/submit",
    name: "Submit",
    component: () => import("../views/Submit.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
