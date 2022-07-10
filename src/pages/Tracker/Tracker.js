import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postTrack} from "../../store/trackState/thunks";
import {selectTracker} from "../../store/trackState/selectors";

export default function Tracker() {
    const dispatch = useDispatch()
    const tracker = useSelector(selectTracker)
    const [trackColor, setTrackColor] = useState([])
    const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    const color = ["red", "orange", "yellow", "green", "blue", "purple"]

    // useEffect(() => {
    //     dispatch(getTrack())
    // }, [])
    console.log(tracker);

    const handleCheck = (color) => {
        if (trackColor.includes(color)) {
            return setTrackColor(trackColor.filter((c) => c !== color))
        }
        setTrackColor([...trackColor, color])
    }
    const handleSend = (day) => {
        dispatch(postTrack(day, trackColor))
        console.log(trackColor, day);
    }
    return (
        <>
            <div>Track you rainbow</div>
            {week.map((day, index) => {
                return (
                    <div key={index}>
                        <h2>{day}</h2>
                        {color.map((c, index) => {
                            return (
                                <div key={index}>
                                    <p>{c}</p>
                                    <input type="checkbox" name="interest" onChange={() => handleCheck(c)}/>
                                </div>
                            )
                        })}
                        <button onClick={() => handleSend(day)}>save you track</button>
                    </div>)
            })}
            {tracker?.map((t) => {
                return (
                    <div>
                        <h5>tracker {t.day}</h5>
                        {t.color.map((c) => <p>{c}</p>)}
                    </div>
                )
            })
            }
        </>
    )
}