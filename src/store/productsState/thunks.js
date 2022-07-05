import axios from "axios";
import {apiUrl} from "../../config/constants";
import {setProducts, setProductsByColor} from "./slice";

export const getProducts = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${apiUrl}/product`, );
            dispatch(setProducts(res.data))
    }
        catch (error) {
            console.log(error.response.data.message);
        }
    }
}
export const getProductsByColor = (color) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${apiUrl}/product/${color}`, );
            dispatch(setProductsByColor(res.data))
    }
        catch (error) {
            console.log(error.response.data.message);
        }
    }
}