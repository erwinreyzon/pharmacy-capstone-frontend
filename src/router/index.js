import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DrugIndex from "../views/DrugIndex.vue";
import DrugShow from "../views/DrugShow.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import LogOut from "../views/LogOut.vue";
import DrugUserNew from "../views/DrugUserNew.vue";
import DrugUserIndex from "../views/DrugUserIndex.vue";
import DrugUserEdit from "../views/DrugUserEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/drugs",
    name: "drugs",
    component: DrugIndex,
  },
  {
    path: "/drugs/:id",
    name: "drug",
    component: DrugShow,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOut,
  },
  {
    path: "/drug_users/:id",
    name: "drug_user-new",
    component: DrugUserNew,
  },
  {
    path: "/drug_users",
    name: "drug_user-index",
    component: DrugUserIndex,
  },
  {
    path: "/drug_users/:id/edit",
    name: "drug_user-edit",
    component: DrugUserEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
