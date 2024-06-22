import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: "task",
    initialState: {
        title: "",
        address:"", // state for address
        vehicleType: "",  // state for vehicle type
        town:"",
        serviceCoordinates:"", // state for service coordinates
        mediaSource: "", // state for handling media and video
        description: "",

    },
    reducers: {
        // Set title
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        // Set vehicle type
        setVehicleType: (state, action) => {
            state.vehicleType = action.payload;
        }, 
        //Set Media Source
        setMediaSource:(state,action)=>{
            state.mediaSource=action.payload
        },
        //Set Description..
        setDescription:(state,action)=>{
            state.description=action.payload
        }
    
    }
});

export const { setTitle, setVehicleType,setMediaSource,setDescription } = TaskSlice.actions;
export default TaskSlice.reducer;
