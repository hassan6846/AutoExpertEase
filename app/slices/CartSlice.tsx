import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold cart items
    platformFee: 8, // Platform fee to charge
    deliveryCharges: 250, // Delivery charges,
    totalCharges: 0, // Total charges for the cart items, including platform fee and delivery charges
  },
  reducers: {
    addItemToCart(state: any, action: any) {
      const newItem = action.payload; // Item to add to cart
      const existingItem = state.items.find((item: any) => item._id === newItem._id); // Check if item already exists in cart

      if (existingItem) {
        // If item already exists, update its quantity
        existingItem.quantity += newItem.quantity;
        console.log(existingItem.quantity)
      } else {
        // If item does not exist, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    // You can add more reducers here for updating, removing items, etc.
    ClearCart(state: any) {

      // Clearing the cart
      state.items = [];
    },
    UpdateQuantity(state: any, action: any) {
      const { _id, quantity } = action.payload;
      const existedItem = state.items.find((item: any) => item._id === _id);
      if (existedItem) {
      if(quantity <= 0){
        state.items=state.items.filter((item: any) => item._id!== _id);
      }else{
        existedItem.quantity = quantity;
      }
      }
    },
    setTotalCharges: (state: any, action: any) => {
      state.totalCharges = action.payload;
    }
  },


});

export const { addItemToCart, ClearCart, UpdateQuantity,setTotalCharges} = cartSlice.actions; // Exporting actions

export default cartSlice.reducer;
