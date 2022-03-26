const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Consultation = require('./consultation')

const Prescription = sequelize.define('prescription', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING,
    remarks: Sequelize.STRING,
    prescriptionUrl: Sequelize.STRING
})


Consultation.hasMany(Prescription)
Prescription.belongsTo(Consultation)

module.exports = Prescription