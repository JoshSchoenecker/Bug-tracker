import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Profile from "../views/Profile.vue";
// @ts-ignore
import FlawsPage from '../views/FlawsPage.vue' 
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/flaws",
    name: "FlawsPage",
    component: FlawsPage,
    beforeEnter: authGuard
  },
  {
    path: "/flaws/:flawId",
    name: "flaw",
    component: "Flaw",
    beforeEnter: authGuard
  }
];

const router = new VueRouter({
  routes
});

export default router;
