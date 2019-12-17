import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/tailwind.css";
import "@/styles/fonts.css";
import * as firebase from "firebase/app";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBDBaJR9mpRuuMs7jQGNW9XlGlU_VnqWnI",
  authDomain: "website-gao.firebaseapp.com",
  databaseURL: "https://website-gao.firebaseio.com",
  projectId: "website-gao",
  storageBucket: "website-gao.appspot.com",
  messagingSenderId: "626673921034",
  appId: "1:626673921034:web:6170fa963316dcadb983f3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
