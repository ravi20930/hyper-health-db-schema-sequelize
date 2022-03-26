const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Symptom = sequelize.define('symptom', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING
})



module.exports = Symptom