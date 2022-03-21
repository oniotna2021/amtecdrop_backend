const express = require('express');
const router = express.Router();

const carritoSchema = require('../models/carrito');

router.get('/', async (req,res) => {
  const carritos = await carritoSchema.find();
  console.log(carritos)
  res.json(carritos);
});

router.get('/:email', async (req,res) => {
  const carritos = await carritoSchema.find({email:req.params.email});
  res.json(carritos);
});

router.post('/',async (req,res) => {

  const carritoExist=await carritoSchema.findOne({
    nombre:req.body.nombre,
    email:req.body.email

  })
  if(carritoExist){{
    return res.status(400).json({error: 'carrito ya existe'})
   }}

    const { email,id_dbproducto,nombre,cantidad,productId,precio_venta} = req.body;
    
    carritohere = new carritoSchema({
    email:email,
    id_dbproducto:id_dbproducto,
    nombre: nombre,
    cantidad:cantidad,
    productId:productId,
    precio_venta:precio_venta
    });
    carritoSchema.create(carritohere, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json('Usuario creado');
      }
    });
});

router.delete('/:id', async (req,res) => {
  await carritoSchema.findByIdAndRemove(req.params.id);
  res.json({status:'Producto eliminado'})
});

router.put('/:id', async (req,res) =>{
  const {email,id_dbproducto,nombre,cantidad,productId,precio_venta} = req.body
  const nuevoCarrito = {email,id_dbproducto,nombre,cantidad,productId,precio_venta}
  console.log(nuevoCarrito)
  await carritoSchema.findByIdAndUpdate(req.params.id, nuevoCarrito)
  res.json({status:'Carrito actualizado'})
});


module.exports = router;