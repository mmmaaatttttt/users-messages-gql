const db = require("../db");

class User {
  static async create({ username, first_name, last_name }) {
    const result = await db.query(
      `INSERT INTO users (
              username,
              first_name,
              last_name)
            VALUES ($1, $2, $3)
            RETURNING username, first_name, last_name`,
      [username, first_name, last_name]
    );
    return result.rows[0];
  }

  static async all() {
    const result = await db.query(
      `SELECT username,
                first_name,
                last_name
            FROM users
            ORDER BY username`
    );

    return result.rows;
  }

  static async get(username) {
    const result = await db.query(
      `SELECT username,
                first_name,
                last_name
            FROM users
            WHERE username = $1`,
      [username]
    );

    return result.rows[0];
  }
}

module.exports = User;
