const express = require('express');
const router = express.Router();

const producto = require('../models/producto');

router.get('/', async (req,res) => {
    const productos = await producto.find();
    res.json(productos);
});

router.get('/:id', async (req,res) => {
    const productoSearch = await producto.findById(req.params.id);
    res.json(productoSearch)
});

router.post('/',async (req,res) => {
    const { productId, nombre, unidades, precio_compra, precio_venta, detalle, categoria, imagen,marca, __v} = req.body;
    productohere = new producto({
    productId:productId,
    nombre: nombre,    
    unidades: unidades,
    precio_compra:precio_compra,
    precio_venta:precio_venta,
    detalle:detalle,
    categoria:categoria,
    imagen:imagen,
    marca:marca,
    __v:__v
    });
        await productohere.save();
    res.json({status: 'Producto Registrado'});
});

router.put('/:id', async (req,res) =>{
    const { productId,nombre,unidades, precio_compra, precio_venta, detalle, categoria, imagen, __v} = req.body;
    const nuevoProducto = {productId, nombre, unidades, precio_compra, precio_venta, detalle, categoria, imagen, __v}
    await producto.findByIdAndUpdate(req.params.id, nuevoProducto)
    res.json({status:'Producto actualizado'})
    
    // console.log(req.params.id);
    // res.json('recibido desde put');
});

router.delete('/:id', async (req,res) => {
    await producto.findByIdAndRemove(req.params.id);
    res.json({status:'Producto eliminado'})
});


module.exports = router;