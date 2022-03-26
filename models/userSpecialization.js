const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Specialization = require('./specialization')
const User = require('./user')

const UserSpecialization = sequelize.define('user_specialization', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING
})

Specialization.hasMany(UserSpecialization)
UserSpecialization.belongsTo(Specialization)

User.hasMany(UserSpecialization)
UserSpecialization.belongsTo(User)

module.exports = UserSpecialization