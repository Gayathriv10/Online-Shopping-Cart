// routes/orderRoutes.js
const express = require('express');
const Order = require('../models/orderModel'); // Ensure the model is correct
const router = express.Router();

// Place an order
router.post('/', async (req, res) => {
  try {
    const { user, items, total } = req.body;
    const newOrder = new Order({ user, items, total });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    res.status(400).json({ message: 'Failed to place order', error: err });
  }
});

module.exports = router;
