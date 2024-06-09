import { createApp } from "vue";
import "./@core/scss/tabler.scss";
import App from "./App.vue";

import { BPage } from "./@core/components/page/index";

import router from "./router";

const app = createApp(App);

app.component("b-page", BPage);
app.use(router);
app.mount("#app");
