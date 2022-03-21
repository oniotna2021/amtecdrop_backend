const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const clientSchema = require('../models/cliente');

router.get('/:email', async (req,res) => {
  const clienteSearch = await clientSchema.find({email:req.params.email});
  res.json(clienteSearch)
});

router.post('/',async (req, res, next) => {
    const jwt=require('jsonwebtoken')
  
    const user=await clientSchema.findOne({
      email:req.body.email
    })
  
    if(!user){
      return res.status(404).json({
        error:'El usuario no esta registrado'
    })}

  
    const validPass = await bcrypt.compare(req.body.password,user.password)
    
    if(!validPass){
      return res.status(401).json({
        error:'La contraseña no es valida'
      })
    }
    
    const token = jwt.sign({
      email:user.email,
      id:user._id
    },"claveSecreta")
  
    res.header('auth-token', token).json({

        email:user.email,
        nombre:user.nombre,
        apellido:user.apellido,
        direccion:user.direccion,
        token:token,
        clasificacion:user.clasificacion
  
      
    })
  
  
  
  
  })

  module.exports = router;