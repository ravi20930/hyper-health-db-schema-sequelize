const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const DocumentType = sequelize.define('document_type', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    title: Sequelize.STRING
})

module.exports = DocumentType