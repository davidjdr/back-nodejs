
const client = require('./connection');

client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)', (err, res) => {
  console.log(err, res)
  client.end()
});
