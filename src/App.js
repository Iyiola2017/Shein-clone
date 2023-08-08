import "./App.css";
import "./Shop.css";
import "./Product.css";
import "./Login.css";
import "./Cart.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav-pages/Nav";
import HomePage from "./components/home-page/HomePage";
import ShopPage from "./components/shop-page/ShopPage";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/product-page/ProductPage";
import MainLogin from "./components/login-page/MainLogin";
import Cart from "./components/cart-page/Cart";
import CartProvider, { SheinContext } from "./components/context/SheinContext";
// import React, { useState, useEffect } from 'react';

function App() {

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 768px)');
  //   setIsMobile(mediaQuery.matches);
  // }, []);

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shoppage" element={<ShopPage />} />
            <Route path="/productpage/:_id" element={<ProductPage />} />
            <Route path="/login" element={<MainLogin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
export default App;