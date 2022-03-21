const express = require('express');
const router = express.Router();

const clientSchema = require('../models/cliente');

router.get('/:mailcode', async (req,res) => {
  const cliente = await clientSchema.find({mailcode:req.params.mailcode});
  res.json(cliente);
});

router.put('/:id', async (req,res) =>{
    await clientSchema.findByIdAndUpdate(req.params.id,{'echeck':true,'mailcode':'0'})
    res.json({status:'Cliente actualizado'})
});



module.exports = router;