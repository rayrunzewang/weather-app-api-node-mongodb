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

router.post('/cities', async (req, res) => {

  const data = new City({
    city: req.body.city,
    country: req.body.country
  })
  try {
    const city = await City.create(data);
    // const dataToSave = await data.save();  不是必须的 Model.create()方法已经包括了save()
    // .save() 和 .create() 都执行相同的工作。重要的区别是 .save()绕过架构验证，但 .create() 检查数据是否符合架构，然后它将在内部触发 .save() 方法
    res.status(200).json(city)
  } catch (error) {
    res.status(500).json({ error});
  }
});

router.delete('/citys/:id', async (req, res) => {
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
    res.status(204).json({result, message: "item deleted"})
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