import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
    //think of reducers as a redux toolkit reducers to use State to
    //Change Default State
    reducers: {
        setOnlineStatus: (state, action: PayloadAction<boolean>) => {
            //remember payload will change.. in selector and dispatch events.🙏
            state.isOnline = action.payload
        }
    }
})


// Finally Exporting
export const { setOnlineStatus } = NetworkSlice.actions
export default NetworkSlice.reducer