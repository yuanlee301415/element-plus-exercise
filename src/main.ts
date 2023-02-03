import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "@/store";
import "./assets/main.css";

function bootstrap() {
  const app = createApp(App);

  setupRouter(app);
  setupStore(app);
  app.use(ElementPlus)
  app.mount("#app");
}

bootstrap();
