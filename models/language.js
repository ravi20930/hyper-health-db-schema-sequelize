const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Language = sequelize.define('language', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING
})

module.exports = Language