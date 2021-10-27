const Sequelize = require('sequelize');
const database = require('../db')

const Postagem = database.define('postagens',{
     id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },

     titulo:{
        type: Sequelize.STRING(150),
        allowNull: false 
     },
     
     conteudo:{
         type: Sequelize.TEXT,
         allowNull: false
     }
})

module.exports = Postagem;