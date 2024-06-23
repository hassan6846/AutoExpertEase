import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold cart items
    platformFee: 8, // Platform fee to charge
    deliveryCharges: 250, // Delivery charges
  },
  reducers: {
    addItemToCart(state: any, action: any) {
      const newItem = action.payload; // Item to add to cart
      const existingItem = state.items.find((item: any) => item._id === newItem._id); // Check if item already exists in cart

      if (existingItem) {
        // If item already exists, update its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If item does not exist, add it to the cart
        state.items.push(newItem);
      }
    },
    // You can add more reducers here for updating, removing items, etc.
    ClearCart(state: any) {

        // Clearing the cart
        state.items = [];
    }
  },
});

export const { addItemToCart,ClearCart } = cartSlice.actions; // Exporting actions

export default cartSlice.reducer;
