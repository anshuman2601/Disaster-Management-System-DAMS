const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b6csxy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
