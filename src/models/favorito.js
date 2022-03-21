const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoritoSchema = new Schema({
    email: {type:String },
    productoId:{type:String },
    id_dbproducto: {type: String},
    nombre:{type:String},
    precio_venta:{type:Number}  
});

module.exports = mongoose.model('favoritos',favoritoSchema);