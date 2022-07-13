import axios from "axios";
import {apiUrl} from "../../config/constants";
import {setOneRecipe, setRecipes} from "./slice";


export const getRecipes = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${apiUrl}/recipes`);
            dispatch(setRecipes(res.data))
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}
export const getRecipesByProd = (prodId) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${apiUrl}/recipes/${prodId}`);
            dispatch(setOneRecipe(res.data.recipes))
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}
export const postNewRecipes = (title, description, image, color, product) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.post(`${apiUrl}/recipes`, {
                title: title,
                description: description,
                image: image,
                color: color,
                product: product
            });
            dispatch(setOneRecipe(res.data))
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}


