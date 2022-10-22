import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DynamicLink from "./components/logic/DynamicLink.vue"
// import $ from "expose-loader?exposes=$,jQuery!jquery";

import "./assets/css/main.css";

// window.$ = require('jquery');

const app = createApp(App);

app.component('DynamicLink', DynamicLink)

app.use(router);

app.mount("#app");
