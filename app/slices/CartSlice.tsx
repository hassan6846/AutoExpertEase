import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],//map all cart items,
        platformFee: 8, //platform fee to charge 
        deliverychargers:250 //
        
    },

    reducers: {
addItemToCart(state:any, action:any) {
    state.items.push(action.payload); //Adding item to cart
}
    }
});
export const { addItemToCart } = cartSlice.actions; //exporting actions


export default cartSlice.reducer;
