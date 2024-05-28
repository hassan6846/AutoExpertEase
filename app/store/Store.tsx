
//CreateStore using toolkit
import { configureStore,combineReducers } from "@reduxjs/toolkit"
//slices
import NetworkSlice from "../slices/NetworkSlice"//network status
import AuthSlice from "../slices/AuthSlice"//Authentication Status

//root reducer



const rootReducer={
    network:NetworkSlice,
    auth:AuthSlice,
}


const Store = configureStore({

 reducer:rootReducer
})

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store
//exported All Reducers
//exported store
