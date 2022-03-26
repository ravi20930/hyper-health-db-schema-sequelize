const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Specialization = sequelize.define('specialization', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING
})

module.exports = Specialization