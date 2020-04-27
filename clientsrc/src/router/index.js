import Vue from "vue";
import VueRouter from "vue-router";
//#region --App Views--
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Profile from "../views/Profile.vue";
// @ts-ignore
import FlawsPage from "../views/FlawsPage.vue";
//#endregion
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/flaws",
    name: "FlawsPage",
    component: FlawsPage,
    beforeEnter: authGuard,
  },
  {
    path: "/flaws/:flawId",
    name: "flaw",
    beforeEnter: authGuard,
    // @ts-ignore
    component: () => import(/*webpackChunkName: "flaw" */ "../views/Flaw.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
