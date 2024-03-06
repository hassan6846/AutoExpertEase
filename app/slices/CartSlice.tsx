import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToIncrement = state.items.find(item => item.id === itemId);
      
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToDecrement = state.items.find(item => item.id === itemId);
      
      if (itemToDecrement) {
        itemToDecrement.quantity -= 1;

        if (itemToDecrement.quantity === 0) {
          // Optionally remove the item if quantity becomes zero
          state.items = state.items.filter(item => item.id !== itemId);
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;



