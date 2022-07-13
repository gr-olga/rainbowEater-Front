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
            console.log(res, 'this is response')
            dispatch(setTracker(res.data))
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}

export const postTrack = (day, color) => {
    return async (dispatch, getState) => {
        const token = selectToken(getState());
        console.log(day, color, "day", "color");
        try {
            const res = await axios.post(`${apiUrl}/tracker`,
                {
                    day: day,
                    color: color,
                }, {
                    headers: {Authorization: `Bearer ${token}`},
                });
            console.log("i post it");
            dispatch(getTrack())
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}

