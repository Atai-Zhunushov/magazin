import { configureStore } from '@reduxjs/toolkit';
import cartReducer from  './cartSlice'
import openListSlice from  './openListSlice'
import filterReducer from  './filterSlice'


const store = configureStore({
    reducer:{
        cart:cartReducer,
        openList: openListSlice,
        filter:filterReducer
    }
})

export default store