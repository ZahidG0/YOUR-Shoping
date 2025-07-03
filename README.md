# Shopping Cart App

A modern, responsive shopping cart web application built with **React**, **Redux Toolkit**, **React Router**, **Tailwind CSS**, and **DaisyUI**. This project demonstrates product listing, cart management, and product addition features with a clean and user-friendly UI.

---

## Features

- 🛒 **Product Listing:** Browse products with images, categories, prices, and upload dates.
- ➕ **Add Product:** Add new products using a validated form.
- 🛍️ **Cart Management:** Add to cart, update quantity, or remove items.
- 💸 **Billing:** View subtotal, shipping, and total cost.
- 🚦 **Routing:** Navigate between Home, Products, and Cart pages.
- 🎨 **Responsive UI:** Styled with Tailwind CSS and DaisyUI.

---

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Vite](https://vitejs.dev/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/shopping-cart.git
   cd shopping-cart
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── carts/
│   │   │   ├── BillingPage.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── CartItems.jsx
│   │   └── products/
│   │       ├── AddProduct.jsx
│   │       └── ProductsCart.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── features/
│   │       ├── cartSlice.js
│   │       └── products/
│   │           └── productsSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## Usage

- **Home Page:** View and add products.
- **Products Page:** (Reserved for future features.)
- **Cart Page:** Manage cart items and checkout.

---

## Customization

- **Add More Product Fields:** Update [`src/redux/features/products/productsSlice.js`](src/redux/features/products/productsSlice.js) and the Add Product form.
- **Styling:** Modify Tailwind or DaisyUI classes in component files.
- **Routing:** Add new pages in [`src/pages`](src/pages).

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [Unsplash](https://unsplash.com/) for
# YOUR-Shoping
