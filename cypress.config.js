const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      allureWriter(on, config)
    },
    baseUrl: "https://www.phptravels.net/login",
    watchForFileChanges: true,
    defaultCommandTimeout: 10000,
    responseTimeout: 30000,
    specPattern: "**/*.feature",

    env: {
      customer: {
        username: "user@phptravels.com",
        password: "demouser"
      },
      agent: {
        username: "agent@phptravels.com",
        password: "demoagent"
      }

    }

  },
});

