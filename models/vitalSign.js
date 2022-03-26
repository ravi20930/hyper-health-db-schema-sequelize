const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const VitalSign = sequelize.define('vital_sign', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING
})

module.exports = VitalSign