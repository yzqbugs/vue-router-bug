import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./views/Main.vue";
import Home from "./views/Home.vue";
let routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:driveId?/:folder+",
    component: Main,
    name: "main",
    props: true,
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
