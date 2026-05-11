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
        padding: '140px 5% 60px',
        minHeight: '100vh',
      }}
    >

      <h1
        style={{
          textAlign: 'center',
          fontSize: '4rem',
          marginBottom: '50px',
          color: '#3e2f25',
        }}
      >
        My Wishlist
      </h1>

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
                padding: '14px 28px',
                borderRadius: '12px',
                border: 'none',
                background: '#c88a5b',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
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
              'repeat(auto-fit, minmax(240px, 280px))',
            justifyContent: 'center',
            gap: '30px',
          }}
        >

          {wishlist.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      )}

    </div>

  );

};

export default Wishlist;