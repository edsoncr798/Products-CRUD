const express = require('express')
const initModels = require('./models/initModels')
const db = require('./utils/database')
const config = require('./config')
const productsRouter = require('./products/products.router')

const app = express()



//? authentication con la base de datos DBeaver
db.authenticate()
    //? valida si las credenciales son correctas 
    .then(() => console.log('Database Authenticated'))
    .catch(err => console.log(err))


//? sincronizamos con la base de datos DBeaver
db.sync()
    //? Sincroniza los modelos con la base de datos, creando las tablas
    .then(() => console.log('Database synchronized'))
    .catch(err => console.log(err))


initModels()


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'OK!!' })
})

app.use('/products', productsRouter)

app.listen(config.port, () => {

    console.log(`Server started at port ${config.port}`)
})