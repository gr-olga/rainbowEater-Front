import axios from "axios";
import {apiUrl} from "../../config/constants";
import {setProducts} from "./slice";

export const getProducts = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${apiUrl}/product/`, );
            dispatch(setProducts(res.data))
    }
        catch (error) {
            console.log(error.response.data.message);
        }
    }
}