const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

// Connecting to the Postgresql Database
const client = new pg.Client(connectionString);
client.connect();

const query = client.query(
  'CREATE TABLE IF NOT EXISTS items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)'
);

module.exports = client;
