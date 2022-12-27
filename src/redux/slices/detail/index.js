import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        name: '',
        price: '',
        image: '',
        memory: [],
        colors: []
    },
    reducers: {
        setDetailPage: (state,action) => {
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.image = action.payload.image;
            state.memory = action.payload.memory;
            state.colors = action.payload.colors;
        }
    }
})

export const { setDetailPage } = detailSlice.actions

export default detailSlice.reducer;