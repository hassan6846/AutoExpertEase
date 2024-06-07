
//CreateStore using toolkit
import { configureStore } from "@reduxjs/toolkit"
//slices
import NetworkSlice from "../slices/NetworkSlice"//network status
import AuthSlice from "../slices/AuthSlice"//Authentication Status
import locationSlice from "../slices/LocationSlice"


//root reducer



const rootReducer = {
    network: NetworkSlice,
    auth: AuthSlice,
    location: locationSlice,
}

//preist

const Store = configureStore({

    reducer: rootReducer
})

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store
//exported All Reducers
//exported store
