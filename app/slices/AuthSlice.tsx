//this Slice only contain 
//user role
//AuthStatus.
//token if possible 

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../interface/AuthInterface"
const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,//loading for differnt elements
        isAlreadyRegisted: false,//we'll check from server if user is registed or not then we navigate throght hooks.
        userToken: null,//Token 
        userinfo: null,//User info presisted version only...
        AlreadyVisitedApp: false,     //if app is opened first time or not
        Progress: 0,//value for progressbar for 
        RefreshTokenTime: 10000     //RefreshTokenTime 10min
    },
    reducers: {
        //SetProgressValueBar
        SetProgressValueBar: (state, action) => {
            state.Progress = action.payload;
        },
        //SetAlreadyVisitedApp
        SetAlreadyVisitedApp: (state, action) => {
            state.AlreadyVisitedApp = action.payload;
        },
        //if Already Existed or nat
        SetIsAlreadyRegisted: (state, action) => {
            state.isAlreadyRegisted = action.payload
        }

    }
})

export const { SetAlreadyVisitedApp, SetProgressValueBar, SetIsAlreadyRegisted } = AuthSlice.actions

export default AuthSlice.reducer