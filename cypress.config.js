const { defineConfig } = require("cypress");
const mysql = require("mysql");

function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      });
    },
  },
  env: {
    "db": {
      "host": "127.0.0.1",
      "user": "root",
      "password": "123456x@X"
    }
  }
});


