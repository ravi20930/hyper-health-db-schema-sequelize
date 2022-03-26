const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const DocumentType = require('./documentType')
const User = require('./user')

const UserDocument = sequelize.define('user_document', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    isVerified: Sequelize.BOOLEAN
})

DocumentType.hasMany(UserDocument)
UserDocument.belongsTo(DocumentType)

User.hasMany(UserDocument)
UserDocument.belongsTo(User)

module.exports = UserDocument