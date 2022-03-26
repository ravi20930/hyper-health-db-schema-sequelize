const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Medicine = require('./medicine')
const Prescription = require('./prescription')

const PrescriptionMedicine = sequelize.define('prescription_medicine', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    numberOfTimes: Sequelize.STRING,
    whenToTake: Sequelize.STRING
})


Prescription.hasMany(PrescriptionMedicine)
PrescriptionMedicine.belongsTo(Prescription)

Medicine.hasMany(PrescriptionMedicine)
PrescriptionMedicine.belongsTo(Medicine)


module.exports = PrescriptionMedicine