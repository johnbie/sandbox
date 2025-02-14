const express = require('express');
const mysql = require('mysql2'); // Use mysql2 library

const app = express();

// MySQL configuration
const dbConfig = {
  host: 'db', // Service name from docker-compose.yml
  user: 'root',
  password: 'example',
  database: 'mydb', // Database name from docker-compose.yml
  connectTimeout: 10000, // Adjust timeout as needed
};

let connection;

function connectDatabase() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      // Attempt to reconnect after a delay
      setTimeout(connectDatabase, 2000);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  connection.on('error', (err) => {
    console.error('MySQL connection error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // Connection lost, attempt to reconnect
      connectDatabase();
    } else {
      throw err;
    }
  });
}

// Connect to MySQL
connectDatabase();

// Create a simple route
app.get('/', (req, res) => {
  // Sample SQL query
  const query = 'SELECT * FROM your_table';

  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Error executing query');
      return;
    }

    // Render the results
    res.json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
