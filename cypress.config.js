const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
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

