require("dotenv").config();
const pool = require("./pool"); // dein pool.js

const SQL = `
INSERT INTO messages (username, message)
VALUES
  ('Alice', 'You’re my favorite thought of the day.'),
  ('Bob', 'Everything feels lighter with you!');
`;

async function main() {
  try {
    await pool.query(SQL);
    console.log("Daten erfolgreich eingefügt!");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end(); // Verbindung schließen
  }
}

main();
