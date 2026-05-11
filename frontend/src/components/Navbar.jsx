import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import {
  FiMenu,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
} from 'react-icons/fi';

import { useSelector } from 'react-redux';

import './Navbar.css';

const Navbar = ({ onMenuClick }) => {

  const [isScrolled, setIsScrolled] =
    useState(false);

  const cartItems = useSelector(
    (state) => state.cart.items || []
  );

  const wishlistItems = useSelector(
    (state) => state.wishlist.items || []
  );

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      );

    };

  }, []);

  return (

    <nav
      className={`navbar ${
        isScrolled ? 'scrolled' : ''
      }`}
    >

      <div className="container navbar-container">

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >

          <button
            className="icon-btn"
            onClick={onMenuClick}
            aria-label="Open Menu"
          >

            <FiMenu size={24} />

          </button>

          <Link
            to="/"
            className="navbar-logo"
          >

            alinéa

          </Link>

        </div>

        <ul className="navbar-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        <div className="navbar-icons">

          <Link
            to="/shop"
            className="icon-btn"
          >

            <FiSearch />

          </Link>

          <Link
            to="/auth"
            className="icon-btn"
          >

            <FiUser />

          </Link>

          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="icon-btn"
          >

            <FiHeart />

            {wishlistItems.length > 0 && (

              <span className="icon-badge">
                {wishlistItems.length}
              </span>

            )}

          </Link>

          {/* CART */}

          <Link
            to="/cart"
            className="icon-btn"
          >

            <FiShoppingCart />

            {cartItems.length > 0 && (

              <span className="icon-badge">
                {cartItems.length}
              </span>

            )}

          </Link>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;