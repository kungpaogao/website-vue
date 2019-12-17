import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import * as firebase from "firebase/app";

import "firebase/auth";

Vue.use(Router);

const checkAuth = function() {
  firebase.auth().onAuthStateChanged(user => {
    return user ? true : false;
  });
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/colors",
      name: "colors",
      component: () => import("./views/Colors.vue"),
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: (to, from, next) => {
        if (checkAuth) {
          next("/");
        } else {
          next();
        }
      },
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/edit",
      name: "edit",
      beforeEnter: (to, from, next) => {
        if (checkAuth) {
          next();
        } else {
          next("/login");
        }
      },
      component: () => import("./views/Edit.vue"),
    },
  ],
});
