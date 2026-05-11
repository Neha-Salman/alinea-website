import React, {
  useEffect,
  useState,
} from 'react';

import {
  useParams,
  Link,
} from 'react-router-dom';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  addToCart,
} from '../redux/features/cartSlice';

import {
  toggleWishlist,
} from '../redux/features/wishlistSlice';

import {
  FiHeart,
} from 'react-icons/fi';

import products from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted =
    wishlistItems.some(
      (item) =>
        item._id === product?._id
    );

  useEffect(() => {

  const foundProduct =
    products.find(
      (item) => item._id === id
    );

  setProduct(foundProduct);

  setLoading(false);

}, [id]);

  const handleWishlist = () => {

    dispatch(toggleWishlist(product));

  };

  const handleAddToCart = () => {

    dispatch(addToCart(product));

  };

  if (loading) {

    return (

      <div className="container">
        <h2>Loading...</h2>
      </div>

    );

  }

  if (!product) {

    return (

      <div className="container text-center">

        <h2>
          Product not found.
        </h2>

        <Link
          to="/shop"
          className="btn-primary"
        >
          Back to Shop
        </Link>

      </div>

    );

  }

 return (

  <div className="product-detail-page container">

    <div className="product-detail-layout">

      <div className="product-detail-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="product-detail-info">

        <p className="product-category">
          {product.category}
        </p>

        <h1>
          {product.name}
        </h1>

        <h2 className="product-price-large">
          Rs. {product.price}
        </h2>

        <p className="product-description">

          {product.description ||
            'Beautiful premium quality product crafted specially for gifting and memorable occasions.'}

        </p>

        <div className="product-actions">

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >

            Add to Cart

          </button>

          <button
            className={`wishlist-btn ${
              isWishlisted
                ? 'active'
                : ''
            }`}
            onClick={handleWishlist}
          >

            <FiHeart />

          </button>

        </div>

      </div>

    </div>

  </div>

);
};
export default ProductDetail;