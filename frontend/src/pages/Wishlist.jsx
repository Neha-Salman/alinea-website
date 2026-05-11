import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import ProductCard from '../components/ProductCard';

const Wishlist = () => {

  const wishlist = useSelector(
    (state) => state.wishlist.items || []
  );

  return (

    <div
      style={{
        padding: '140px 5% 80px',
        minHeight: '100vh',
      }}
    >

      <div
        style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >

        <p
          style={{
            color: '#b58a5a',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '12px',
            fontSize: '14px',
          }}
        >
          Saved Products
        </p>

        <h1
          style={{
            fontSize: '4rem',
            color: '#3e2f25',
            fontWeight: '500',
          }}
        >
          My Wishlist
        </h1>

      </div>

      {wishlist.length === 0 ? (

        <div
          style={{
            textAlign: 'center',
            marginTop: '80px',
          }}
        >

          <h2
            style={{
              color: '#7a6a5f',
              marginBottom: '20px',
            }}
          >
            Your wishlist is empty 🤍
          </h2>

          <Link to="/shop">

            <button
              style={{
                padding: '14px 30px',
                borderRadius: '14px',
                border: 'none',
                background: '#c88a5b',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              Continue Shopping
            </button>

          </Link>

        </div>

      ) : (

        <div
          style={{
            display: 'grid',

            gridTemplateColumns:
              'repeat(4, minmax(0, 1fr))',

            gap: '28px',

            alignItems: 'start',
          }}
        >

          {wishlist.map((product) => (

            <div
              key={product._id || product.id}
              style={{
                width: '100%',
              }}
            >

              <ProductCard product={product} />

            </div>

          ))}

        </div>

      )}

    </div>

  );

};

export default Wishlist;