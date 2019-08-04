/** Database setup for users. */

const { Client } = require("pg");

let DB_URI = "postgresql:///users-messages-gql";

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;
