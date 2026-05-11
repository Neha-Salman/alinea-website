import React, { useState } from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import CartCheckout from './pages/CartCheckout';
import Wishlist from './pages/Wishlist';

function App() {

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (

    <div className="app-wrapper">

      <Marquee />
      <ScrollToTop />
      <Navbar
        onMenuClick={() =>
          setSidebarOpen(true)
        }
      />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/shop"
            element={<Shop />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />

          <Route
            path="/auth"
            element={<Auth />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/cart"
            element={<CartCheckout />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

        </Routes>

      </main>

      {/* FOOTER */}

      <Footer />

    </div>

  );

}

export default App;