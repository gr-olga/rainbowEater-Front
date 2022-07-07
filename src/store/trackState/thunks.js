import axios from "axios";
import {apiUrl} from "../../config/constants";
import {setTracker} from "./slice";
import {selectToken} from "../user/selectors";


export const getTrack = () => {
    return async (dispatch, getState) => {
        const token = selectToken(getState());

        try {
            const res = await axios.get(`${apiUrl}/tracker`, {
                headers: {Authorization: `Bearer ${token}`},
            });
            dispatch(setTracker(res.data))
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}