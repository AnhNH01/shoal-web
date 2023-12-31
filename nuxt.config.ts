// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-icon"],
  colorMode: {
    preference: "light",
  },
  ui: {
    icons: ["heroicons"],
  },
});
