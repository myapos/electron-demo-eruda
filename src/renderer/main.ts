import { createApp } from "vue";
import App from "./App.vue";

console.log("Renderer process started");
const isDev = import.meta.env?.DEV ?? process.env.NODE_ENV === "development";

console.log("Renderer process started", isDev);
console.log("eee", process.env.NODE_ENV);
console.log("ddd", import.meta.env);
if (isDev) {
  // Dynamically import eruda in development
  import("eruda").then((eruda) => {
    eruda.default.init();
    console.log("Eruda initialized");
  });
}

createApp(App).mount("#app");
