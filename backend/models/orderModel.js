const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

// Define the order schema
const orderSchema = new mongoose.Schema({
  user: { type: userSchema, required: true }, // Nested user schema
  items: [{
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  total: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
