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
      //console.log(action.payload.p_id, action.payload.price);
      state.products = state.products.filter(  product=> product.id !==  action.payload.id);
      state.quantity = state.quantity - action.payload.cantidad;
      state.total = state.total - action.payload.total ; 
     
      
    },
    addAddress: (state, action) => {
      console.log(action.payload);
      state.address = action.payload;
    },
  },
});

export const { addAddress, addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
