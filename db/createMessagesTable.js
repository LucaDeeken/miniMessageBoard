require("dotenv").config();

const pool = require("./pool"); // dein pool.js

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function main() {
  try {
    await pool.query(SQL);
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end(); // Verbindung schließen
  }
}

main();
