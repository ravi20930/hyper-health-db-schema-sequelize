const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Medicine = sequelize.define('medicine', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    description: Sequelize.STRING,
    grams: Sequelize.STRING,
    numberOfTimes: Sequelize.STRING,
    whenToTake: Sequelize.STRING
})

module.exports = Medicine