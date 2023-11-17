// filterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => {
            return action.payload; // Устанавливаем значение фильтра
        },
        setFilterPrice: (state, action) => {
            return action.payload; // Устанавливаем значение фильтра
        },
    },
});

export const { setFilter, setFilterPrice } = filterSlice.actions;
export default filterSlice.reducer;
