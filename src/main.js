import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import componentService from "./services/ComponentService";

import "@/assets/main.css";
import "../public/css/invoice.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "@/assets/css/font-awesome.css";
import "@/assets/css/font-awesome.min.css";

import "./services/AxiosServices";
import "./services/RupiahServices";
import "./services/DateServices";

Vue.config.productionTip = false;

Vue.use(componentService);

store
  .dispatch("authentication/showUserByToken")
  .then(() => {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  })
  .catch((err) => {
    console.log(err.response);
  });
