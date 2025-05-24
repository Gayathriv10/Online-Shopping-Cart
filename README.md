# 🛒 Online Shopping Cart

This is a simple and interactive Online Shopping Cart web application built using **HTML**, **CSS**, and **JavaScript**, with backend integration using **Python** and **MongoDB**.

## 📌 Features

- 🛍️ Product listing with images, names, and prices in Indian Rupees (₹)
- 🔍 Search and filter products
- ➕ Add products to cart with quantity selection
- 🛒 View, update, and remove items from cart
- 📦 Place an order and view confirmation with animation
- 📱 Responsive design for mobile and desktop
- 🧾 Order history and data storage using MongoDB
- 🔐 User signup and login system

## 📁 Project Structure

```
project-root/
├── backend/
│   ├── models/
│   │   ├── cartModel.js
│   │   ├── orderModel.js
│   ├── routes/
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   └── server.js
├── frontend/
│   ├── cart.html
│   ├── product.html
│   ├── order.html
│   ├── signin.html
│   ├── signup.html
├── public/
│   └── index.html
├── .env
└── README.md
```

## ⚙️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python (or Node.js), Express (if Node), Flask (if Python)
- **Database:** MongoDB
- **Other:** JSON for local data storage (optional)

## 🚀 Getting Started

### Prerequisites

- Node.js and npm (or Python)
- MongoDB installed or access to MongoDB Atlas

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/online-shopping-cart.git
cd online-shopping-cart
```

2. Install backend dependencies:

```bash
npm install         # if using Node.js
```

3. Start MongoDB server locally or set up Atlas connection.

4. Run the backend server:

```bash
node backend/server.js  # or python app.py if Python backend
```

5. Open `public/index.html` in your browser to begin.

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 📷 Screenshots

*Insert screenshots of your Product Page, Cart Page, and Order Confirmation Page here.*

## 🧠 Future Enhancements

- Add payment gateway integration (e.g., Razorpay or Stripe)
- Implement user profile and order history
- Admin panel for managing products

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).