import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    currentLocation: null, // user current location from device
    destination: null, // user custom service address
    distanceTravelTime: null, //inital route etc..
    Expertdistance: null, // ExpertDistance from User
    ExpertCurrentLocation: null,    //Service provider locoation
    ExpertArrivalTime: null,//time Arrival for Expert eg mechanic
    longitude: "",
    latitude: ""
};

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setCurrentLocation: (state, action) => {
            state.currentLocation = action.payload; // we arre basically destructuring the object of initalState and setting through action.payload.
        },
        setDestination: (state, action) => {
            state.destination = action.payload; //Setting Destination to get service
        },
        setDistanceTravelTime: (state, action) => {
            state.distanceTravelTime = action.payload; //setting distance travel time
        },
        //Expert Current location 
        setExpertCurrentLocation: (state, action) => {
            state.ExpertCurrentLocation = action.payload;
        },
        //Expert Arrival Time
        setExpertArrivalTime: (state, action) => {
            state.ExpertArrivalTime = action.payload;
        },
        setLongitude: (state, action) => {
            state.longitude = action.payload
        },
        setLatitude: (state, action) => {
            state.latitude = action.payload

        }

    },
});

export const { setCurrentLocation, setDestination, setDistanceTravelTime, setLongitude, setLatitude } = locationSlice.actions;

export default locationSlice.reducer;
