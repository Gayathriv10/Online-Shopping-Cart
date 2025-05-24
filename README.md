# 🛒 Online Shopping Cart

This is a simple and interactive Online Shopping Cart web application built using **HTML**, **CSS**, and **JavaScript**, with backend integration using **Python** and **MongoDB**.

## 📌Features

- 🛍️ Product listing with images, names, and prices in Indian Rupees (₹)
- 🔍 Search and filter products
- ➕ Add products to cart with quantity selection
- 🛒 View, update, and remove items from cart
- 📦 Place an order and view confirmation with animation
- 📱 Responsive design for mobile and desktop
- 🧾 Order history and data storage using MongoDB
- 🔐 User signup and login system

## ⚙️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python (or Node.js), Express (if Node), Flask (if Python)
- **Database:** MongoDB


### Prerequisites

- Node.js and npm (or Python)
- MongoDB installed or access to MongoDB Atlas

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Gayathriv10/Online-Shopping-Cart.git
cd online-shopping-cart
```

2. Install backend dependencies:

```bash
npm install        
```

3. Start MongoDB server locally or set up Atlas connection.

4. Run the backend server:

```bash
node backend/server.js  
```

5. Open `public/index.html` in your browser to begin.

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
