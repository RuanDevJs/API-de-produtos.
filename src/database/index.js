const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'la_blank'
})

client.connect();

async function Query(query, values){
  const {rows} = await client.query(query, values);
  return rows;
}

module.exports = Query