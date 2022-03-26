const Sequelize = require('sequelize');

const sequelize = new Sequelize('food_database', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
