import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    userid:'',
    loading: false, //loading for different elements
    isAlreadyRegisted: false, //we'll check from server if user is registed or not then we navigate through hooks.
    userToken: '', //Token 
    Progress: 0.3, //value for progress bar 
    HeaderColor: "#E04E2F",
    Isauth: false,
    phone: "",
    password: "",
    firstName: "",
    lastName: "",
    Email: "",
    deviceBrand:"",
    deviceName: "",
    isVendor: false,
    isExpert: false,
    CarPostVerification: false,
    CarRentingVerification: false,
  },
  reducers: {
    //SetProgressValueBar
    SetProgressValueBar: (state, action) => {
      state.Progress = action.payload;
    },
    //SetAlreadyVisitedApp

    //if Already Existed or not
    SetIsAlreadyRegisted: (state, action) => {
      state.isAlreadyRegisted = action.payload;
    },
    //SetHeaderColor
    SetHeaderColor: (state, action) => {
      state.HeaderColor = action.payload;
    },
    //SetPhone
    SetPhone: (state, action) => {
      state.phone = action.payload;
    },
    //SetPassword
    SetPassword: (state, action) => {
      state.password = action.payload;
    },
    //Set Auth State
    SetAuthState: (state, action) => {
      state.Isauth = action.payload;
    
    },//Set Device Name
    SetDeviceName: (state, action) => {
      state.deviceName = action.payload
    },//Set DeviceType



    SetFirstName: (state, action) => {
      state.firstName = action.payload
    },
    SetLastName: (state, action) => {
      state.lastName = action.payload
    },
    SetEmail: (state, action) => {
      state.Email = action.payload
    },
    SetDeivceBrand:(state,action)=>{
      state.deviceBrand=action.payload
    },
    SetAuthToken:(state,action)=>{
      state.userToken=action.payload
    },
    SetUserId:(state,action)=>{
      state.userid=action.payload
    }
  },
});

export const {

SetDeivceBrand,
SetDeviceName,
SetAuthToken,
  SetEmail,
  SetFirstName,
  SetLastName,
  SetUserId,
  SetProgressValueBar,
  SetIsAlreadyRegisted,
  SetHeaderColor,
  SetPhone,
  SetPassword,
  SetAuthState,
} = AuthSlice.actions;

export default AuthSlice.reducer;
