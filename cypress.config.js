const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges : false,
  //pageLoadTimeout : 20000,
  
  e2e: {
    baseUrl : "https://admin-demo.nopcommerce.com/admin/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
