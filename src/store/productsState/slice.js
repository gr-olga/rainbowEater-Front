import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [] || null,
    productByColor: {} ||[]
};

export const prodStateSlice = createSlice({
    name: "prodState",
    initialState,
    reducers: {
        setProducts:(state, action)=>{
           state.products = action.payload
        },
        setProductsByColor:(state, action)=>{
           state.productByColor = action.payload
        }
    }
})

export const {setProducts, setProductsByColor} =
    prodStateSlice.actions;

export default prodStateSlice.reducer;