const express = require('express');
const router = express.Router();
const City = require('../models/City');

// Get all citys
router.get('/cities', async (req, res) => {
  try {
    const citys = await City.find();
    console.log(citys)
    res.json(citys);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/city', async (req, res) => {
  try {
    console.log(req.body)

    const city = await City.create(req.body);
    res.status(201).json({message: 'City Added'});
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