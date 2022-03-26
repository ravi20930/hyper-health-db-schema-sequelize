const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const User = require('../models/user')

const UserAddress = sequelize.define('user_address', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    addressTitle: Sequelize.STRING,
    addressLineOne: Sequelize.STRING,
    addressLineTwo: Sequelize.STRING,
    city: Sequelize.STRING,
    zipCode: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING
})


User.hasMany(UserAddress, {foreignKey: 'userId'})
UserAddress.belongsTo(User, {foreignKey: 'userId', constraints: true, onDelete: 'CASCADE'})

module.exports = UserAddress