import React from 'react';

import { Link } from 'react-router-dom';

import {
  FiHeart,
  FiShoppingCart,
} from 'react-icons/fi';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  toggleWishlist,
} from '../redux/features/wishlistSlice';

import {
  addToCart,
} from '../redux/features/cartSlice';

import './ProductCard.css';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items || []
  );

  // SAFE PRODUCT ID
  const productId =
    product._id || product.id;

  // CHECK IF WISHLISTED
  const isWishlisted =
    wishlistItems.some(
      (item) =>
        (item._id || item.id) ===
        productId
    );

  // WISHLIST
  const handleWishlist = (e) => {

    e.preventDefault();

    e.stopPropagation();

    dispatch(toggleWishlist(product));

  };

  // CART
  const handleCart = (e) => {

    e.preventDefault();

    e.stopPropagation();

    dispatch(addToCart(product));

  };

  return (

    <div className="shop-product-card">

      <Link
        to={`/product/${productId}`}
        className="shop-product-link"
      >

        {/* IMAGE */}

        <div className="shop-product-image-wrapper">

          <img
            src={product.image}
            alt={product.name}
            className="shop-product-image"
          />

          {/* WISHLIST */}

          <button
            className={`shop-product-wishlist-btn ${
              isWishlisted
                ? 'active'
                : ''
            }`}
            onClick={handleWishlist}
          >

            <FiHeart />

          </button>

          {/* CART */}

          <button
            className="shop-product-cart-btn"
            onClick={handleCart}
          >

            <FiShoppingCart />

          </button>

        </div>

        {/* CONTENT */}

        <div className="shop-product-content">

          <p className="shop-product-category">

            {product.category}

          </p>

          <h3 className="shop-product-name">

            {product.name}

          </h3>

          <p className="shop-product-price">

            Rs. {product.price}

          </p>

        </div>

      </Link>

    </div>

  );

};

export default ProductCard;