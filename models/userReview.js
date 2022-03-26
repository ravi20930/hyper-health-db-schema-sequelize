const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const User = require('../models/user')

const UserReview = sequelize.define('user_review', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    comments: Sequelize.STRING,
    stars: Sequelize.STRING
})

User.hasMany(UserReview, {foreignKey:"doctorId"});
UserReview.belongsTo(User, {foreignKey:'doctorId'});
User.hasOne(UserReview, {foreignKey:'reviewerId', as: 'reviewer'});
UserReview.belongsTo(User, {foreignKey:'reviewerId', as: 'reviewer'});

module.exports = UserReview