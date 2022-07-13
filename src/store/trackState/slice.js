import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tracker: []
};

export const trackStateSlice = createSlice({
    name: "trackState",
    initialState,
    reducers: {
        setTracker:(state, action)=>{
            console.log(action.payload, 'this is tracker')
            state.tracker = action.payload
        },
    }
})

export const {setTracker} =
    trackStateSlice.actions;

export default trackStateSlice.reducer;