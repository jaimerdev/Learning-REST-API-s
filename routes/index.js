const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')
const productosController = require('../controllers/productosController')

module.exports = function() {
    //Agrega nuevos clientes via POST
    router.post('/clientes', clienteController.nuevoCliente)
    //Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes)
    //Muestra un cliente en específico (ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente)
    //Actualizar Cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente)
    //Eliminar Cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente)
    /*PRODUCTOS*/
    //Nuevos productos
    router.post('/productos', productosController.nuevoProducto)
    return router
}
