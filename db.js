const Sequelize = require('sequelize');
const sequelize = new Sequelize('node25', 'root', '',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;