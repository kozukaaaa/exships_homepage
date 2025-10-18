import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";

// PrimeVue 本体
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

// PrimeVue コンポーネント
import Button from "primevue/button";
import Card from "primevue/card";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  // グローバルコンポーネント登録
  .component("Button", Button)
  .component("Card", Card)
  .mount("#app");
