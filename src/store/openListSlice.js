import {createSlice} from "@reduxjs/toolkit";

const openListSlice = createSlice({
    name: 'openList',
    initialState: {
        setList: false
    },
    reducers: {
        openList: (state, action) => {
            state.setList = true
        },
        closeList: (state, action) => {
            state.setList = false
        }
    }
})

export const {openList , closeList} = openListSlice.actions

export default openListSlice.reducer