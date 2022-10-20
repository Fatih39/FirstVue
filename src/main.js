import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DynamicLink from "./components/logic/DynamicLink.vue"

import "./assets/css/main.css";

const app = createApp(App);

app.component('DynamicLink', DynamicLink)

app.use(router);

app.mount("#app");
