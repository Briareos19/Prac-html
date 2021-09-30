import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/ViewProductComponent"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../components/CheckoutComponent"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/contactComponent"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/loginComponent"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../components/adminComponent"),
  },
  {
    path: "/inventory",
    name: "inventory",
    component: () => import("../components/inventoryViewComponent"),
  },
  {
    path: "/create-product",
    name: "create-product",
    component: () => import("../components/inventoryCreateComponent"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/cartComponent"),
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;