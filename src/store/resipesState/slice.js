import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    recipes: [] || null,
    recipe: []
};

export const recipeStateSlice = createSlice({
    name: "recipeState",
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        },
        setOneRecipe: (state, action) => {
            state.recipe = action.payload
        },
    }
})

export const {setRecipes, setOneRecipe} =
    recipeStateSlice.actions;

export default recipeStateSlice.reducer;