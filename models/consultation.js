const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const User = require('./user')

const Consultation = sequelize.define('consultation', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    symptoms: Sequelize.STRING,
    notes: Sequelize.STRING,
    assessment: Sequelize.STRING,
    refNo: Sequelize.STRING
})

User.hasMany(Consultation, {foreignKey: 'doctorId', as: 'doctor'})
Consultation.belongsTo(User, {foreignKey: 'doctorId'})
User.hasMany(Consultation, {foreignKey: 'patientId', as: 'patient'})
Consultation.belongsTo(User, {foreignKey: 'patientId'})


module.exports = Consultation