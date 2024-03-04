//CreateStore using toolkit
import { configureStore } from "@reduxjs/toolkit"


import NetworkSlice from "../slices/NetworkSlice"

const Store = configureStore({
    reducer: {
        network: NetworkSlice
    }
})

export default Store
//exported All Reducers
//exported store
