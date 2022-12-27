import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state,action) => {
            state.cart.push(action.payload)
            state.quantity++
        },
        DeleteProduct: (state,action) => {
            state.cart.splice(action.payload,1)
            state.quantity--
        },
        ResetCart: (state,action) => {
            state.cart = [];
            state.quantity = 0;
        }
    }
})

export const { AddToCart, DeleteProduct,ResetCart } = cartSlice.actions

export default cartSlice.reducer;