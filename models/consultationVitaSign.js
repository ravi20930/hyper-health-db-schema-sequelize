const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Consultation = require('./consultation')
const VitalSign = require('./vitalSign')

const ConsultationVitalSign = sequelize.define('consultation_vital_sign', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    notes: Sequelize.STRING
})

Consultation.hasMany(ConsultationVitalSign)
ConsultationVitalSign.belongsTo(Consultation)

VitalSign.hasMany(ConsultationVitalSign)
ConsultationVitalSign.belongsTo(VitalSign)

module.exports = ConsultationVitalSign