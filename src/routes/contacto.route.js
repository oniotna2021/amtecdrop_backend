const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");

router.post('/',async(req,res) => {
    const cuerpoEmail=req.body
    console.log(cuerpoEmail)
    res.json(cuerpoEmail)

// var transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure:true,
//         auth: {
//             user: 'tonyusb@gmail.com',
//             pass: 'eyztkpfhsisnjgfm'
//         }
//     });

// let message={
//     from: cuerpoEmail.nombre,
//     to:'alvis.cronin4@ethereal.email',
//     subject:'Correo desde la APP el galpon',
//     text:cuerpoEmail.mensaje
// }

//     transporter.sendMail(message, (err,info) => {
//         if(err){
//             console.log('Ocurrio el siguiente error' + err.message);
//             return process.exit(1);
//         }else{
//         console.log('Mensaje enviado: %s',info.messageId);
//         console.log('URL de vista previa: %s',nodemailer.getTestMessageUrl(info));
//     }
//     })

});

module.exports = router;