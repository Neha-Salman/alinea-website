import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  FiTrash2,
  FiArrowLeft,
} from 'react-icons/fi';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from '../redux/features/cartSlice';

import { Button } from '../components/Button';

import './CartCheckout.css';

const CartCheckout = () => {

  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.cart.items.cartItems
  );

  const [checkoutStep, setCheckoutStep] =
    useState('cart');

  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const handleCheckout = (e) => {

    e.preventDefault();

    setCheckoutStep('success');

    dispatch(clearCart());
  };

  if (checkoutStep === 'success') {

    return (

      <div
        className="container text-center mt-8 animate-fade-in"
        style={{ padding: '4rem 0' }}
      >

        <h1 className="heading-1">
          Thank You!
        </h1>

        <p className="text-muted mb-8">
          Your order has been placed
          successfully.
        </p>

        <Link to="/shop">

          <Button size="lg">
            Continue Shopping
          </Button>

        </Link>

      </div>
    );
  }

  if (cart.length === 0) {

    return (

      <div
        className="container text-center mt-8"
        style={{ padding: '4rem 0' }}
      >

        <h2 className="heading-2">
          Your Cart is Empty
        </h2>

        <p className="text-muted mb-8">
          Looks like you haven’t added
          anything yet.
        </p>

        <Link to="/shop">

          <Button size="lg">
            Shop Now
          </Button>

        </Link>

      </div>
    );
  }

  return (

    <div className="cart-checkout-page container animate-fade-in">

      <h1 className="heading-1 text-center mb-8">

        {checkoutStep === 'cart'
          ? 'Your Cart'
          : 'Checkout'}

      </h1>

      <div className="cart-layout">

        <div className="cart-main">

          {checkoutStep === 'cart' ? (

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="cart-item"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />

                  <div className="cart-item-details">

                    <Link
                      to={`/product/${item.id}`}
                    >

                      <h3 className="cart-item-title">
                        {item.name}
                      </h3>

                    </Link>

                    <p className="cart-item-price">
                      ${item.price.toFixed(2)}
                    </p>

                  </div>

                  <div className="quantity-selector">

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity:
                              item.quantity - 1,
                          })
                        )
                      }
                      className="qty-btn"
                    >
                      -
                    </button>

                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="qty-input"
                    />

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity:
                              item.quantity + 1,
                          })
                        )
                      }
                      className="qty-btn"
                    >
                      +
                    </button>

                  </div>

                  <div className="cart-item-total">

                    $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}

                  </div>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                    className="remove-btn"
                  >

                    <FiTrash2 />

                  </button>

                </div>
              ))}

            </div>

          ) : (

            <div className="checkout-form-container">

              <button
                className="back-link mb-4"
                onClick={() =>
                  setCheckoutStep('cart')
                }
              >

                <FiArrowLeft className="mr-2" />

                Back to Cart

              </button>

              <h3 className="heading-3">
                Shipping & Payment
              </h3>

              <form
                id="checkout-form"
                onSubmit={handleCheckout}
                className="checkout-form"
              >

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Shipping Address
                  </label>

                  <textarea
                    required
                    rows="3"
                  ></textarea>

                </div>

                <h4 className="mt-4 mb-4 font-bold">
                  Payment Details
                </h4>

                <div className="form-group">

                  <label>
                    Card Number
                  </label>

                  <input
                    type="text"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    required
                  />

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="form-group">

                    <label>
                      Expiry
                    </label>

                    <input
                      type="text"
                      placeholder="MM/YY"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      CVC
                    </label>

                    <input
                      type="text"
                      placeholder="123"
                      required
                    />

                  </div>

                </div>

              </form>

            </div>

          )}

        </div>

        <aside className="order-summary">

          <h3 className="heading-3 mb-4">
            Order Summary
          </h3>

          <div className="summary-row">

            <span>
              Subtotal ({cart.length} items)
            </span>

            <span>
              ${total.toFixed(2)}
            </span>

          </div>

          <div className="summary-row">

            <span>Shipping</span>

            <span>Free</span>

          </div>

          <div className="summary-row summary-total">

            <span>Total</span>

            <span>
              ${total.toFixed(2)}
            </span>

          </div>

          {checkoutStep === 'cart' ? (

            <Button
              size="lg"
              className="w-full mt-8"
              onClick={() =>
                setCheckoutStep('checkout')
              }
            >

              Proceed to Checkout

            </Button>

          ) : (

            <Button
              size="lg"
              form="checkout-form"
              type="submit"
              className="w-full mt-8"
            >

              Place Order

            </Button>

          )}

        </aside>

      </div>

    </div>
  );
};

export default CartCheckout;