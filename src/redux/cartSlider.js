import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    address: {},
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
      state.quantity = state.quantity + action.payload.cantidad;
      state.total =
        state.total + action.payload.precio * action.payload.cantidad;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id_pro !== action.payload.id_pro
      );
      state.quantity = state.quantity - action.payload.cantidad;
      state.total = state.total - action.payload.subTotal;
    },
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    clearCart: (state, action) => {
      state.products = [];
      state.address = {};
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addAddress, addProduct, deleteProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
