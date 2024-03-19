import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],//map all cart items,
        platformFee: 8, //platform fee to charge 
        deliveryFee: null, //delivery fee
    },

    reducers: {

    }
});


export default cartSlice.reducer;
