const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const User = require('../models/user')
const Day = require('../models/day')

const DoctorAvailableTiming = sequelize.define('doctor_available_timing', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      fromTime: Sequelize.TIME,
      toTime: Sequelize.TIME
})

Day.hasMany(DoctorAvailableTiming)
DoctorAvailableTiming.belongsTo(Day)

User.hasMany(DoctorAvailableTiming)
DoctorAvailableTiming.belongsTo(User, {foreignKey: 'userId', constraints: true, onDelete: 'CASCADE'})

module.exports = DoctorAvailableTiming