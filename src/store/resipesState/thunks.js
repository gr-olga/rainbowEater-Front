import axios from "axios";
import {apiUrl} from "../../config/constants";
import {setRecipes} from "./slice";


export const getRecipes = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${apiUrl}/recipes`, );
            dispatch(setRecipes(res.data))
    }
        catch (error) {
            console.log(error.response.data.message);
        }
    }
}
