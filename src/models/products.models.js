const { DataTypes, UUID } = require('sequelize')
const db = require('../utils/database')

const Products = db.define('products', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        field:'isAvailable'
    }
})

module.exports = Products