const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // changing the viewport for all tests in end2end
    // viewportHeight: 720,
    // viewportWidth: 1024,
  },
});
