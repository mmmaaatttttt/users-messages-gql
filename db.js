/** Database setup for users. */

const { Client } = require("pg");

let DB_URI = "postgresql:///users-messages-gql";

let db = new Client({
  connectionString: process.env.DATABASE_URL || DB_URI,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect();

module.exports = db;
