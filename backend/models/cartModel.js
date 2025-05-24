const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
