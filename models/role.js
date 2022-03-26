const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const User = require('./user')

const Role = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    roleName: Sequelize.STRING
})


User.hasMany(Role, {foreignKey: 'userId'})
Role.belongsToMany(User, {foreignKey: 'userId', constraints: true, onDelete: 'CASCADE', through: 'user_roles', otherKey: 'roleId'})

module.exports = Role