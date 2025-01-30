const { defineConfig } = require("cypress");
// require('dotenv').config();
// const dotenvPlugin = require('cypress-dotenv');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://e-office.bni.co.id',
    setupNodeEvents(on, config) {
      // const updateConfig = dotenvPlugin(config, null, true)
      // config.env.NPP = process.env.NPP
      // config.env.PASSWORD = process.env.PASSWORD

      return config
    },
  },
  watchForFileChanges: false,
});
