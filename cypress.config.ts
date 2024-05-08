import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    
    // },
    baseUrl: 'https://url-shortener-apps.vercel.app',
    chromeWebSecurity: true,
    includeShadowDom: true,
    viewportWidth: 1920,
    viewportHeight: 1080,

  },
});
