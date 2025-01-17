const { defineConfig } = require("cypress");
const dotenvPlugin = require('cypress-dotenv');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://e-office.bni.co.id',
    setupNodeEvents(on, config) {
      const updateConfig = dotenvPlugin(config, null, true)
      return updateConfig
    },
  },
  watchForFileChanges: false,
});
