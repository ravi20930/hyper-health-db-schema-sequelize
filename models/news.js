const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const News = sequelize.define('news', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    badge: Sequelize.STRING,
    position: Sequelize.STRING,
    type: Sequelize.STRING
})

module.exports = News