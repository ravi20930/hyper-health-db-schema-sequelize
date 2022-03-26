const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Day = sequelize.define('day', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING
})


module.exports = Day