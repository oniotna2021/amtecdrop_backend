const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productId:{type:String},
    nombre: {type:String},    
    unidades: {type:Number},
    precio_compra:{type:Number},
    precio_venta:{type:Number},
    detalle:{type:String},
    categoria:{type:String},
    imagen:{type:String },
    marca:{type:String},
    __v:{type:String}
    });

module.exports = mongoose.model('productos',productSchema);