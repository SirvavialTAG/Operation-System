const express = require('express');
const Pool = require("pg").Pool;
const cors = require('cors');
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'DataBase1',
  password: 'astro20B',
  port: 5432,
});
module.exports = pool;

app.get('/goods', async (req, res) => {
  try {
    const goodsQuery = await pool.query("SELECT * FROM goods");;
    res.json(goodsQuery.rows);
  }
  catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
