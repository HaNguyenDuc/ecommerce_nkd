import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.quantity -= product.quantity;
        state.total -= product.price * product.quantity;
        state.products.splice(productIndex, 1);
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product._id === productId
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.quantity -= 1;
        state.total -= product.price;
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product._id === productId
      );
      if (product) {
        product.quantity += 1;
        state.quantity += 1;
        state.total += product.price;
      }
    },
  },
});

export const { addProduct, removeProduct, decreaseQuantity, increaseQuantity,deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
