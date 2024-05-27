import { createApp } from "vue";
import "./@core/scss/tabler.scss";
import App from "./App.vue";

import router from "./router";

createApp(App).use(router).mount("#app");
