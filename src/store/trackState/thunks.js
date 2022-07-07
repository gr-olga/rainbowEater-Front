import axios from "axios";
import {apiUrl} from "../../config/constants";
import {setProducts} from "../productsState/slice";
import {setTracker} from "./slice";


export const getTrack = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${apiUrl}/tracker`, );
            dispatch(setTracker(res.data))
        }
        catch (error) {
            console.log(error.response.data.message);
        }
    }
}