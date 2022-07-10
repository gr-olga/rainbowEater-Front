import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    recipes: [] || null,
    recipe: {}
};

export const recipeStateSlice = createSlice({
    name: "recipeState",
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        },
    }
})

export const {setRecipes} =
    recipeStateSlice.actions;

export default recipeStateSlice.reducer;