import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTrack} from "../../store/trackState/thunks";
import {selectTracker} from "../../store/trackState/selectors";

export default function Tracker() {
    const dispatch = useDispatch()
    const tracker = useSelector(selectTracker)
    const [trackDay, setTrackDay] = useState("")
    const [trackColor, setTrackColor] = useState([])
    const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    const color = ["red", "orange", "yellow", "green", "blue", "purple"]

    useEffect(() => {
        dispatch(getTrack())
    }, [])
    console.log(tracker);

    const handleCheck = (color) => {
        if (trackColor.includes(color)) {
            return
        }
        setTrackColor([...trackColor, color])
    }
    const handleSend = (day) => {
        console.log(trackColor, day);
    }
    console.log("trackDay", trackDay, "trackColor", trackColor);
    return (
        <>
            <div>Track you rainbow</div>
            {week.map((day) => {
                return (
                    <div>
                        <h2>{day}</h2>
                        {color.map((c) => {
                            return (
                                <>
                                    <p>{c}</p>
                                    <input type="checkbox" name="interest" onChange={() => handleCheck(c)}/>
                                </>
                            )
                        })}
                        <button onClick={() => handleSend(day)}>save you track</button>
                    </div>)
            })}
        </>
    )
}