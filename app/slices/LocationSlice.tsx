import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    currentLocation: "", // user current location from device
    destination: "", // user custom service address
    distanceTravelTime: "", //inital route etc..
    Expertdistance: "", // ExpertDistance from User
    ExpertCurrentLocation: "", //Service provider locoation
    ExpertArrivalTime: "", //time Arrival for Expert eg mechanic
    longitude: "",
    latitude: "",
    nearbyplace: "Enter Nearby Place",
  },
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
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
      state.longitude = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    SetNearbyPlace: (state, action) => {
      state.nearbyplace = action.payload;
    },
  },
});

export const {
  setDestination,
  setDistanceTravelTime,
  setExpertArrivalTime,
  setExpertCurrentLocation,
  setLatitude,
  setLongitude,
  SetNearbyPlace,
} = locationSlice.actions;

export default locationSlice.reducer;
