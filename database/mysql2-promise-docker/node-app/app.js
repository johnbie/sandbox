const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// MySQL configuration
const dbConfig = {
  host: 'db', // Service name from docker-compose.yml
  user: 'root',
  password: 'example',
  database: 'mydb', // Database name from docker-compose.yml
};

async function connectDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL database');
    return connection;
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
    throw error;
  }
}

// Create a simple route
app.get('/', async (req, res) => {
  try {
    const connection = await connectDatabase();
    const [rows] = await connection.execute('SELECT * FROM your_table');
    res.json(rows);
  } catch (error) {
    console.error('Error executing MySQL query:', error);
    res.status(500).send('Error executing query');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
