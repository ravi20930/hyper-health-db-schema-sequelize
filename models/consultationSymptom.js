const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Consultation = require('./consultation')
const Symptom = require('./symptom')

const ConsultationSymptom = sequelize.define('consultation_symptom', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    notes: Sequelize.STRING
})

Symptom.hasMany(ConsultationSymptom)
ConsultationSymptom.belongsTo(Symptom)

Consultation.hasMany(ConsultationSymptom)
ConsultationSymptom.belongsTo(Consultation)


module.exports = ConsultationSymptom