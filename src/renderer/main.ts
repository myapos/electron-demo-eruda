import { createApp } from "vue";
import App from "./App.vue";

const isDev = import.meta.env?.DEV ?? process.env.NODE_ENV === "development";

if (isDev) {
  try {
    const eruda = await import("eruda");
    eruda.default.init();
    console.log("Eruda initialized");

    function repositionEruda() {
      eruda.default.position({
        x: window.innerWidth - 60,
        y: window.innerHeight - 60,
      });
    }

    repositionEruda();

    window.addEventListener("resize", repositionEruda);
  } catch (error) {
    console.error("Failed to load Eruda:", error);
  }
}

createApp(App).mount("#app");
