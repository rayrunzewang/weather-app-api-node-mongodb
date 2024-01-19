const express = require('express');
const router = express.Router();
const City = require('../models/City');

// Get all citys
router.get('/citys', async (req, res) => {
  try {
    const citys = await City.find();
    console.log(citys)
    res.json(citys);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single product by ID
// router.get('/citys/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

module.exports = router;