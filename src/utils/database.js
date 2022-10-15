const { Sequelize } = require('sequelize')
const config = require('../config')


//! Creando la coneccion a la base de datos  
const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database
})


module.exports = db
