import React from 'react';

import { Link } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

import products from '../data/products';

import './Home.css';

const Home = () => {

  // ONLY 3 FEATURED PRODUCTS

  const featuredProducts =
    products.slice(0, 3);

  return (

    <div className="home-page">

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="hero-content container">

          <p className="hero-subtitle">
            Luxury Handmade Collection
          </p>

          <h1 className="hero-title">

            Elegant Gifts &
            Personalized Cards

          </h1>

          <p className="hero-description">

            Discover handcrafted cards,
            luxury baskets, aesthetic gift
            boxes and curated keepsakes
            designed beautifully for every
            special occasion.

          </p>

          <Link
            to="/shop"
            className="hero-btn"
          >

            Shop Collection

          </Link>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}

      <section className="featured-section container">

        <div className="section-header">

          <div>

            <p className="section-subtitle">
              Curated Collection
            </p>

            <h2 className="section-title">
              Featured Products
            </h2>

          </div>

          <Link
            to="/shop"
            className="view-all-btn"
          >

            View All

          </Link>

        </div>

        {/* 3 PRODUCTS ONLY */}

        <div className="featured-grid">

          {featuredProducts.map(
            (product) => (

              <ProductCard
                key={product._id}
                product={product}
              />

            )
          )}

        </div>

      </section>

      {/* PRODUCT CATEGORIES */}

      <section className="categories-section container">

        <div className="section-header-center">

          <p className="section-subtitle">
            Explore Categories
          </p>

          <h2 className="section-title">
            Shop By Category
          </h2>

        </div>

        <div className="categories-grid">

          {/* CARDS */}

          <Link
            to="/shop?category=Cards"
            className="category-card"
          >

            <img
              src={products[0].image}
              alt="Cards"
            />

            <div className="category-overlay"></div>

            <div className="category-content">

              <h3>Cards</h3>

              <p>
                Handmade greeting cards
                crafted for every emotion.
              </p>

            </div>

          </Link>

          {/* BASKETS */}

          <Link
            to="/shop?category=Baskets"
            className="category-card"
          >

            <img
              src={products[4]?.image}
              alt="Baskets"
            />

            <div className="category-overlay"></div>

            <div className="category-content">

              <h3>Baskets</h3>

              <p>
                Elegant curated baskets
                for luxurious gifting.
              </p>

            </div>

          </Link>

          {/* GIFT BOXES */}

          <Link
            to="/shop?category=Gift Boxes"
            className="category-card"
          >

            <img
              src={products[1].image}
              alt="Gift Boxes"
            />

            <div className="category-overlay"></div>

            <div className="category-content">

              <h3>Gift Boxes</h3>

              <p>
                Personalized premium gift
                boxes with aesthetic style.
              </p>

            </div>

          </Link>

        </div>

      </section>

    </div>

  );

};

export default Home;