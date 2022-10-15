// ? habilita acceder a las variables de entorno de mi .env
require('dotenv').config()

const config = {
    port: process.env.PORT || 5001,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'root12368',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME
    }
}

module.exports = config