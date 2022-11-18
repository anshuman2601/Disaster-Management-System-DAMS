import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "b6csxy",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  "component": {
    "devServer": {
      "framework": "create-react-app",
      "bundler": "webpack"
    }
  }
});
