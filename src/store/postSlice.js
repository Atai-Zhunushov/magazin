import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name:'post',
    initialState: {
        items:[]
    },
    reducers: {
        setPostsItem: (state, action) => {
            state.items = action.payload
        }
    },
})

export const {setPostsItem} = postSlice.actions
export default postSlice.reducer