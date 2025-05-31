#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS msg_practice (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  username VARCHAR ( 255 ) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO msg_practice (text, username) 
VALUES
  ('Hola, mundo!', 'Juli'),
  ('Esto es un mensaje de prueba.', 'Bot'),
  ('Probando la base de datos.', 'Admin');
`;

async function populate() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Done ✅");
  } catch (err) {
    console.error("Error during seeding:", err);
  } finally {
    await client.end();
  }
}

module.exports = populate;
