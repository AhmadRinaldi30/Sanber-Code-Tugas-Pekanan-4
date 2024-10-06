const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", 
  e2e: { 
    setupNodeEvents(on, config) {
    require("cypress-mochawesome-reporter/plugin")(on); 
   }, 
    pecPattern : "cypress/e2e/scenarios",
    supportFile : "cypress/support/commands.js",
    baseUrl : 'https://www.saucedemo.com/',
  },

   

  
  
  
});