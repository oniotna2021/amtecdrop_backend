const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    nombre: {type:String , required: true},
    apellido: {type:String , required: true},
    email: {type:String , required: true},
    telefono: {type:Number },
    pais: {type:String },
    ciudad: {type:String},
    direccion: {type:String},
    documento:{type:String},
    clasificacion: {type:String},
    echeck:{type:Boolean},
    celcheck:{type:Boolean},
    regcomp:{type:Boolean},
    fiscaltype:{type:String},
    mailcode:{type:String},
    password: {type:String , required: true}      
});

module.exports = mongoose.model('clientes',ClientSchema);



