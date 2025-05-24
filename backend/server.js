const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cartRoutes = require('./routes/cartRoutes'); // Make sure this file exists and exports a router
const orderRoutes = require('./routes/orderRoutes');  // Ensure you import the correct route
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public')); // <- this line is key

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend'))); // serve frontend folder
app.use(express.static(path.join(__dirname, '../public')));   // serve public folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/online_shop')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes); 
app.use('/api/users', userRoutes);


// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
