const uuid = require('uuid')
const Products = require('../models/products.models')


const createProduct = async (data) => {
    //? insert into Products (id, name, category, price, isAvailable)....
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvalailable: data.isAvailable
    })
    return newProduct;
}


// ! Aqui hacemos como un Select * From products
const getAllProducts = async () => {
    const data = await Products.findAll() //? trae toda la info
    return data;
}


const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id   //?puede ser tambien id:id
        }
    })
    return data;
}


//! Eliminamos un producto identificando su id
const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id
        }
    })
    return data;
}

//! Actualizamos un producto identificado por Id 
const updateProduct = async (id, data) => {
    const infoDB = await Products.update(data, {
        where: {
            id
        }
    })
    return infoDB;
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct
}