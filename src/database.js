const mongoose = require('mongoose');
const user='antonio';
const password='Th14g0_4r0n';
const dataB='AMTECdrop'
uri= `mongodb+srv://${user}:${password}@cluster0.ab2s4.mongodb.net/${dataB}?retryWrites=true&w=majority`;

// uri=`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.error(err));

module.exports = mongoose