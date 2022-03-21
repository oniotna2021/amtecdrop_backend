//requires
const express = require('express');
const morgan = require('morgan');
const path = require('path');
cors = require("cors");
const { mongoose } = require('./database');

const app = express();
var corsOptions={
  origin:'*',
  optionSuccessStatus:200
}


//settings
app.set('port', process.env.PORT || 4000 );
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

//routes
app.use('/api/cliente', require('./routes/cliente.routes'));
app.use('/api/producto', require('./routes/producto.route'));
app.use('/api/login', require('./routes/login.route'));
app.use('/api/carrito', require('./routes/carrito.route'));
app.use('/api/favoritos', require('./routes/favoritos.route'));
app.use('/api/contacto', require('./routes/contacto.route'));
app.use('/api/nueva', require('./routes/nueva.route'));
app.use('/api/validar', require('./routes/validar.route'));
app.use('/api/regdet', require('./routes/regdetail.route'));
app.use('/api/pagar', require('./routes/epayco.route'));
app.use('/api/spotify', require('./routes/spotify.route'));









//static files
console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')));
//starting server
app.listen(app.get('port'), ( (req,res)=> {
    console.log(`Servidor activo en el puerto: ${app.get('port')}`);
}));