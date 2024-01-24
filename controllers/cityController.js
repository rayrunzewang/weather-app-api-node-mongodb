const express = require('express');
const router = express.Router();
const City = require('../models/City');

// Get all cities
router.get('/cities', async (req, res) => {
  try {
    const cities = await City.find();
    console.log(cities)
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/city', async (req, res) => {

  const data = new City({
    cityName: req.body.cityName,
    countryName: req.body.countryName
  })
  try {
    const city = await City.create(req.body);
    const dataToSave = await data.save(); // 不是必须的 Model.create()方法已经包括了save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/city/:id', async (req, res) => {
  try {
    const deleteCity = await City.findById(req.params.id);
    if (!deleteCity) {
      return res.status(404).json({ error: 'Item not found', message: 'Item not found' });
    }
    const result = await City.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Item not found', message: 'Item not found' });
    }
    console.log(result)
    res.status(202).json({result, message: "item deleted"})
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', message: 'Error Deleting' });
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