const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DataBase1',
  password: 'astro20B',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connection to database established at:', result.rows[0].now);
  });
});

app.get('/api/goods', async (req, res) => {
  try {
    const goodsQuery = `
      SELECT g.product_id, g.product_name, c.category_name, g.price
      FROM goods g
      JOIN categories c ON g.category = c.categories_id
    `;
    const result = await pool.query(goodsQuery);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
