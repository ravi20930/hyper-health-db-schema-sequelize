const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Language = require('./language')
const User = require('./user')

const UserLanguage = sequelize.define('user_language', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING
})

Language.hasMany(UserLanguage)
UserLanguage.belongsTo(Language)

User.hasMany(UserLanguage)
UserLanguage.belongsTo(User)

module.exports = UserLanguage