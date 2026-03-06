const { Pool } = require("pg");
require("dotenv").config();

// Pool mit Datenbankverbindung
module.exports = new Pool({
  host: process.env.DB_HOST, // z. B. 'localhost' oder Host von Render/Supabase
  user: process.env.DB_USER, // Datenbank-Benutzername
  password: process.env.DB_PASS, // Passwort
  database: process.env.DB_NAME, // Name deiner Datenbank
  port: 5432, // Standard-Port für PostgreSQL
  ssl: {
    rejectUnauthorized: false, // 🔥 Render DB verlangt SSL, aber wir ignorieren Zertifikatprüfung
  },
});
