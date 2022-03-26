const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    firstName: Sequelize.STRING,
    middleName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    password: Sequelize.STRING,
    accessToken: Sequelize.STRING,
    lastLogin: Sequelize.STRING,
    passwordResetToken: Sequelize.STRING,
    isOnline: Sequelize.STRING,
    dob: Sequelize.STRING,
    weight: Sequelize.STRING,
    height: Sequelize.STRING,
    gender: Sequelize.STRING,
    consultationFee: Sequelize.STRING,
    userBio: Sequelize.STRING,
    designation: Sequelize.STRING
})


module.exports = User