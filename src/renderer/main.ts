import { createApp } from "vue";
import App from "./App.vue";

console.log("Renderer process started");
const isDev = import.meta.env?.DEV ?? process.env.NODE_ENV === "development";

console.log("Renderer process started", isDev);
console.log("eee", process.env.NODE_ENV);
console.log("ddd", import.meta.env);
if (isDev) {
  console.log("mpika");
  // Dynamically import eruda in development
  import("eruda").then((eruda) => {
    eruda.default.init();
    console.log("Eruda initialized");
    eruda.default.position({
      x: window.innerWidth - 60,
      y: window.innerHeight - 60,
    });
  });
  // const eruda = await import("eruda");
  // eruda.default.init();
  // console.log("Eruda initialized");
  // eruda.default.position({
  //   x: window.innerWidth - 60,
  //   y: window.innerHeight - 60,
  // });
}

createApp(App).mount("#app");
