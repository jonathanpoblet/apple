import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        product: '',
        price: '',
        description: '',
        colors: []
    },
    reducers: {
        setDetailPage: (state,action) => {
            state.product = action.payload;
            state.price = action.payload;
            state.description = action.payload;
            state.colors = action.payload
        }
    }
})

export const { setDetailPage } = detailSlice.actions

export default detailSlice.reducer;