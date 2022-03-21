const express = require('express');
const router = express.Router();

const clientSchema = require('../models/cliente');

router.get('/:email', async (req,res) => {
  const cliente = await clientSchema.find({email:req.params.email});
  res.json(cliente);
});

module.exports = router;