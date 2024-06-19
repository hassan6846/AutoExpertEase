import { createSlice } from "@reduxjs/toolkit"

const userslice = createSlice({
    name: "user",
    initialState: {
        avatar: '',


    },
    reducers: {
        SetAvatar: (state, action) => {
            state.avatar = action.payload
        }
    }
})
export const {
    SetAvatar
} = userslice.actions;

export default userslice.reducer;
