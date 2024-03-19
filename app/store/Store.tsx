//CreateStore using toolkit
import { configureStore } from "@reduxjs/toolkit"


import NetworkSlice from "../slices/NetworkSlice"//network status
import AuthSlice from "../slices/AuthSlice"//Authentication Status

//root reducer






const Store = configureStore({

    reducer: {
        network: NetworkSlice,
        auth: AuthSlice
    }
})

export default Store
//exported All Reducers
//exported store
