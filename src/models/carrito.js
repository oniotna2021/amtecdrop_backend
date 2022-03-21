const mongoose = require('mongoose');
const { Schema } = mongoose;

const carritoSchema = new Schema({
    email: {type:String},
    id_dbproducto: {type: String},
    nombre:{type:String},
    cantidad:{type:Number},
    productId:{type:String},
    precio_venta:{type:Number}
});

module.exports = mongoose.model('carrotemp',carritoSchema);