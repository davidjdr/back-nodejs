require('../config/config');
const { Pool, Client } = require('pg');

//const connectionString = 'postgresql://postgres:postgres@localhost:5432/back-node'
/*
const pool = new Pool({
  connectionString: connectionString,
})
pool.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
});*/

const client = new Client();
client.connect();

module.exports = client;
