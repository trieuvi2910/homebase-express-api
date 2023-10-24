const { Sequelize } = require('sequelize');

// Set up a SQLite database with Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/database.sqlite',
});

module.exports = sequelize;