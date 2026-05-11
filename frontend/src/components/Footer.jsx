import React from 'react';

import {
  Link,
} from 'react-router-dom';

import './Footer.css';

const Footer = () => {

  return (

    <footer className="footer">

      <div className="container footer-content">

        <div className="footer-brand">

          <h2>alinéa</h2>

          <p>

            Elegant handcrafted gifts,
            luxury baskets and customized
            cards designed beautifully
            for every special moment.

          </p>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>

          <Link to="/shop">Shop</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-links">

          <h4>Categories</h4>

          <Link to="/shop?category=Cards">
            Cards
          </Link>

          <Link to="/shop?category=Baskets">
            Baskets
          </Link>

          <Link to="/shop?category=Gift Boxes">
            Gift Boxes
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 alinéa.
        All Rights Reserved.

      </div>

    </footer>

  );

};

export default Footer;