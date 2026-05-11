import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {

    addToCart: (state, action) => {

      const existingItem = state.items.find(
        (item) =>
          (item._id || item.id) ===
          (action.payload._id || action.payload.id)
      );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.items.push({
          ...action.payload,
          quantity: 1,
        });

      }

    },

    removeFromCart: (state, action) => {

      state.items = state.items.filter(
        (item) =>
          (item._id || item.id) !== action.payload
      );

    },

    updateQuantity: (state, action) => {

      const item = state.items.find(
        (item) =>
          (item._id || item.id) ===
          action.payload.id
      );

      if (item) {

        item.quantity = action.payload.quantity;

        if (item.quantity < 1) {
          item.quantity = 1;
        }

      }

    },

    clearCart: (state) => {

      state.items = [];

    },

  },

});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;