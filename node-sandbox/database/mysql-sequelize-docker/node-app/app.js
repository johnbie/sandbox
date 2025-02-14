const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

// MySQL configuration
const sequelize = new Sequelize('mydb', 'root', 'example', {
  host: 'db',
  dialect: 'mysql'
});

// Define the Customer model
const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'customers'
});

// Create a simple route
app.get('/', async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
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
