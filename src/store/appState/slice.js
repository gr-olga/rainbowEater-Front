import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    message: null,
    week: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    color: ["red", "orange", "yellow", "green", "blue", "purple"]
};

export const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {
        appLoading: (state) => {
            state.loading = true;
        },
        appDoneLoading: (state) => {
            state.loading = false;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        clearMessage: (state, action) => {
            state.message = null;
        },
    },
});

export const {appLoading, appDoneLoading, setMessage, clearMessage} =
    appStateSlice.actions;

export default appStateSlice.reducer;