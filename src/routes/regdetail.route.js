const express = require('express');
const router = express.Router();
const regSchema = require('../models/registrado');

router.get('/', async (req,res) => {
     const registrados = await regSchema.find();
     res.json(registrados);
});

router.get('/:id', async (req,res) => {
    const registrado = await regSchema.findById(req.params.id);
    res.json(registrado)
});

router.post('/',async (req,res) => {

      console.log(req.body)

      const registrado=new regSchema({
        email: req.body.email,
        ip: req.body.ip,
        fecha: req.body.fecha,
        hora: req.body.hora
    });

    regSchema.create(registrado, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json('Registrado creado');
      }
    });

      

});

module.exports = router;
