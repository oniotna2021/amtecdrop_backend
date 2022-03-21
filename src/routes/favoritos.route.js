const express = require('express');
const router = express.Router();

const favoritoSchema = require('../models/favorito');

router.get('/', async (req,res) => {
    const favoritos = await favoritoSchema.find();
    res.json(favoritos);
  });

  router.get('/:email', async (req,res) => {
    const favoritos = await favoritoSchema.find({email:req.params.email});
    res.json(favoritos);
  });

  router.post('/',async (req,res) => {
    const hayFavorito = await favoritoSchema.findOne({email:req.body.email,
                                                   productId:req.body.productID,
                                                   id_dbproducto: req.body._id,
                                                   nombre:req.body.nombre,
                                                   precio_venta:req.body.precio_venta
                                                   });

    console.log(hayFavorito)

    if(hayFavorito){
      res.json('Ya existe favorito para este cliente');
    }else{
      const favorito=await new favoritoSchema({
        email: req.body.email,
        productoId: req.body.productoId,
        id_dbproducto: req.body._id,
        nombre:req.body.nombre,
        precio_venta:req.body.precio_venta
    })
        favoritoSchema.create(favorito, (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log(data);
          res.json('Favorito creado');
        }
      }); 
    }
});

router.delete('/:id', async (req,res) => {
  await favoritoSchema.findByIdAndRemove(req.params.id);
  res.json({status:'Favorito eliminado'})
});

  
  module.exports = router;

  