import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeItemCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
})

export const {addItemToCart, removeItemCart} = cartSlice.actions
export default cartSlice.reducer