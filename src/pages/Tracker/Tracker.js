import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postTrack} from "../../store/trackState/thunks";
import {selectTracker} from "../../store/trackState/selectors";
import "./Tracker.css"

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

    function getTrackerDay(tracker, day) {
        return tracker.find(td => td.day === day)
    }

    function isColorCheckedAtDay(trackerDay, color) {
        if (!trackerDay) return false;
        return trackerDay.color.includes(color)
    }

    return (
        <div className="trackPageBpx">
            <div>Track you rainbow</div>
            <div className="trackBox">
                {week.map((day, index) => {
                    return (
                        <div key={index} className="weekBox">
                            <h2 className="dayName">{day}</h2>
                            <div className="colorCheck">
                                {color.map((c, index) => {
                                    return (
                                        <div key={index} className="colorCh" style={{backgroundColor: c}}>
                                            <p className="colorName">{c}</p>
                                            <input type="checkbox" name="interest"
                                                   checked={isColorCheckedAtDay(getTrackerDay(tracker, day), c)}
                                                   onChange={() => handleCheck(c)}/>
                                        </div>
                                    )
                                })}
                            </div>
                            <button
                                className="btnColor"
                                onClick={() => handleSend(day)}
                            >
                                save you track
                            </button>
                        </div>)
                })}
                {/*<div >*/}
                {/*    {tracker?.map((t) => {*/}
                {/*        return (*/}
                {/*            <div >*/}
                {/*                <h5>tracker {t.day}</h5>*/}
                {/*                {t.color.map((c) => <p>{c}</p>)}*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*    }*/}
                {/*< /div>*/}
            </div>
        </div>
    )
}