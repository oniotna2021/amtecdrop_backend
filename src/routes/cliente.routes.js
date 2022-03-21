const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')
const regSchema = require('../models/registrado');

const clientSchema = require('../models/cliente');



router.get('/', async (req,res) => {
     const clientes = await clientSchema.find();
     res.json(clientes);
});

router.get('/:id', async (req,res) => {
    const clienteSearch = await clientSchema.findById(req.params.id);
    res.json(clienteSearch)
});

router.post('/',async (req,res) => {

      console.log(req.body)
      const emailExist=await clientSchema.findOne({email:req.body.email})
      if(emailExist){{
        return res.status(400).json({error: 'emmail registrado'})
       }}

    const encryp=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(req.body.password, encryp)
    
    const user=new clientSchema({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion,
        documento: req.body.documento,
        clasificacion: req.body.clasificacion,
        echeck:req.body.echeck,
        celcheck:req.body.celcheck,
        regcomp:req.body.regcomp,
        fiscaltype:req.body.fiscaltype,
        password:password, 
        mailcode:req.body.mailcode,
    })
    
    clientSchema.create(user, (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log(data);
          res.json('Usuario creado');
        }
      });

      let transport = nodemailer.createTransport({
        host: 'mail.solucionesamtec.com.co',
        port: 587,
        auth: {
           user: 'contacto@solucionesamtec.com.co',
           pass: 'yvW43H]?shFd'
        },
        tls: {
          rejectUnauthorized: false
      }        
    });

      const message = {
      from: 'contacto@solucionesamtec.com.co', // Sender address
      to: req.body.email,         // List of recipients
      subject: 'Valida tu correo para solucionesAMTEC', // Subject line
      html: ` <h1 align="center">Bienvenido a solucionesAMTEC</h1>
      <br>
      <div align="center"><img src="https://solucionesamtec.com.co/imagenes/logoamtecpeq.jpg"></div>
      <br>
      <h2 align="center">Valida tu codigo: ${req.body.mailcode}</h2>
      <br>
      <h2 align="center">en la siguiente direccion: <a href=" http://localhost:3000/validar"> VALIDAR AQUI</a> <h2>
      <br>
      <h3 align="center">soluciones AMTEC: <a href=">www.solucionesamtec.com.co">www.solucionesamtec.com.co</a></h3>
     `
  };

  transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
  });





});

router.put('/:id', async (req,res) =>{
    const {nombre,apellido,email,telefono,pais,ciudad,direccion,clasificacion,password} = req.body;
    const nuevoCliente = {nombre,apellido,email,telefono,pais,ciudad,direccion,clasificacion,password}
    await clientSchema.findByIdAndUpdate(req.params.id, nuevoCliente)
    res.json({status:'Cliente actualizado'})
    
    // console.log(req.params.id);
    // res.json('recibido desde put');
});

router.delete('/:id', async (req,res) => {
    await clientSchema.findByIdAndRemove(req.params.id);
    res.json({status:'Cliente eliminado'})
});


  



module.exports = router;
