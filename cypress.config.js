const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://angular-qa-recruitment-app.netlify.app',
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.{js,ts,jsx,feature}"
  },
});
