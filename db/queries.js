const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(`
    SELECT id, username, message,
           TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI:SS') AS created_at
    FROM messages
    ORDER BY created_at DESC
  `);
  return rows;
}

async function insertMessage(username, message) {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [
    username,
    message,
  ]);
}

module.exports = {
  getAllMessages,
  insertMessage,
};
