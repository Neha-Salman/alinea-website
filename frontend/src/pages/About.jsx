import React from 'react';

import aboutImage from '../assets/products/about.jpg';

import './About.css';

const About = () => {

  return (

    <div className="about-page">

      {/* HERO */}

      <section className="about-hero container">

        <div className="about-image">

          <img
            src={aboutImage}
            alt="About Alinéa"
          />

        </div>

        <div className="about-content">

          <p className="about-subtitle">
            About Alinéa
          </p>

          <h1>

            Elegant Gifting Crafted
            With Meaning

          </h1>

          <p className="about-description">

            At Alinéa, we believe gifting
            should feel personal, artistic,
            and unforgettable.

            Every card, basket, and curated
            gift box is thoughtfully designed
            with elegance and emotion to make
            every special occasion memorable.

          </p>

          <p className="about-description">

            From handcrafted greeting cards
            to luxury gift collections,
            our products combine aesthetics,
            creativity, and premium quality
            to deliver a beautiful gifting
            experience.

          </p>

        </div>

      </section>

      {/* VALUES */}

      <section className="about-values container">

        <div className="value-card">

          <h3>Handcrafted</h3>

          <p>

            Every product is designed
            carefully with creativity
            and attention to detail.

          </p>

        </div>

        <div className="value-card">

          <h3>Elegant</h3>

          <p>

            Minimal luxury aesthetics
            inspired by timeless beauty.

          </p>

        </div>

        <div className="value-card">

          <h3>Personalized</h3>

          <p>

            Designed to make every gift
            meaningful and memorable.

          </p>

        </div>

      </section>

    </div>

  );

};

export default About;