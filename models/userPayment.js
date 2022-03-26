const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const User = require('./user')
const Consultation = require('./consultation')

const UserPayment = sequelize.define('user_payment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    paymentStatus: Sequelize.STRING,
    paymentGatewayResponse: Sequelize.STRING,
    paidAmount: Sequelize.STRING,
    finalAmountAfterDiscount: Sequelize.STRING
})


User.hasMany(UserPayment, {foreignKey: 'userId'})
UserPayment.belongsTo(User, {foreignKey: 'userId', constraints: true, onDelete: 'CASCADE'})

Consultation.hasMany(UserPayment)
UserPayment.belongsTo(Consultation)


module.exports = UserPayment