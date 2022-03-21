const mongoose = require('mongoose');
const { Schema } = mongoose;

const registradoSchema = new Schema({
    email: {type:String},
    ip: {type:String },
    hora: {type:String}, 
    fecha: {type:String},
    
});

module.exports = mongoose.model('registrados',registradoSchema);