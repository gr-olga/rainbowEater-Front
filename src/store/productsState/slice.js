import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],

};

export const prodStateSlice = createSlice({
    name: "prodState",
    initialState,
    reducers: {
        setProducts:(state, action)=>{
           state.products = action.payload
        }
    }
})

export const {setProducts} =
    prodStateSlice.actions;

export default prodStateSlice.reducer;