import { createSlice } from "@reduxjs/toolkit"

// Defining Interface for props type for better typeCheck⭐
interface NetworkState {
    isOnline: boolean;
}
//InitialState Always Use CamelCase for Namming
//We have to check Network Status Dynamically
const initialState: NetworkState = {
    isOnline: true//default is true
}
//ExportSlice
const NetworkSlice = createSlice({
    name: "netowork",
    initialState,
    reducers: {
        setOnlineStatus: (state, action) => {
            state.isOnline = action.payload //we'll pass custom property from the app entry or any where if the network status changes..
        }
    }
})


// Finally Exporting
export const { setOnlineStatus } = NetworkSlice.actions
export default NetworkSlice.reducer