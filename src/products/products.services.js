const { response } = require('express')
const productsControllers = require('./products.controllers')


// ? Creamos el producto
const postProducts = (req, res) => {
    const data = req.body;
    //? insert into products .... values('data.name', 'data.category',...) 
    if (data.name && data.category && data.price && data.isAvailable) {
        productsControllers.createProduct(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    } else {
        res.status(400).json({ message: 'Missing Data' })
    }

}


//? Mostramos los productos creados
const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(infoDB => {
            res.status(200).json(infoDB)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}


//? Mostramos un productos buscado por su id
const getProductById = (req, res) => {
    const id = req.params.id;
    productsControllers.getProductById(id)
        .then(infoDB => {
            if (infoDB) {
                res.status(200).json(infoDB)
            } else {
                res.status(404).json({ message: 'Invalid Id' })
            }
        })
        .catch(err => {
            res.status(404).json({ message: err.message })
        })
}


// ? Eliminamos un producto
const deleteProduct = (req, res) => {
    const id = req.params.id;
    productsControllers.deleteProduct(id)
        .then(infoDB => {
            if (infoDB) {
                res.status(204).json(infoDB)
            } else {
                res.status(400).json({ message: `Don't exit product with id: ${id} ` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

//? Modificacion parcial
const patchProduct = (req, res) => {
    const id = req.params.id;
    const data={
        name: req.body.name, 
        category: req.body.category,
        price: req.body.price, 
        isAvailable: req.body.isAvailable
    }
    productsControllers.updateProduct(id, data)
        .then(infoDB =>{
            if(infoDB){
                res.status(200).json({message: `Product with id: ${id}, successfully modified`})
            }else{
                res.status(400).json({message: 'Invalid Id'})
            }
        })
        .catch(err=>{
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    postProducts,
    getAllProducts,
    getProductById,
    deleteProduct,
    patchProduct
}