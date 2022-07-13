import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postTrack} from "../../store/trackState/thunks";
import {selectTracker} from "../../store/trackState/selectors";
import "./Tracker.css"
import {selectColors, selectDays} from "../../store/appState/selectors";
import TrackList from "../../components/TrackList/TrackList";

export default function Tracker() {
    const d = new Date();
    const dispatch = useDispatch()
    const tracker = useSelector(selectTracker)
    const [trackColor, setTrackColor] = useState([])
    const color = useSelector(selectColors)
    const weekDay = useSelector(selectDays)
    let day = weekDay[d.getDay()].toString()

    console.log(day, "this is the day");
    const handleSend = (day) => {
        dispatch(postTrack(day, trackColor))
        // / setTrackColor([])
    }

    function getTrackerDay(tracker, day) {
        return tracker.find(td => td.day === day)
    }

    function isColorCheckedAtDay(trackerDay, color) {
        if (!trackerDay) return false;
        return trackerDay.color.includes(color)
    }

    const handleCheck = (color) => {
        if (trackColor.includes(color)) {
            return setTrackColor(trackColor.filter((c) => c !== color))
        } else {
            setTrackColor([...trackColor, color])
        }
    }

    return (
        <div className="trackPageBpx">
            <div className="pageTitle">Track you rainbow</div>
            <div className="trackBox">
                <h2 className="dayName">{day}</h2>
                {color.map((c, index) => {
                    return (
                        <div key={index}
                             className={'colorCh'}
                             style={{
                                 backgroundColor: isColorCheckedAtDay(getTrackerDay(tracker, day), c) ? `${c}` : '',
                             }}
                        >
                            <p className="colorName">{c}</p>
                            <input type="checkbox"
                                   name="interest"
                                   onChange={() => handleCheck(c)}
                            />
                        </div>
                    )
                })}
                <button
                    className="btnColor"
                    onClick={() => handleSend(day)}
                >
                    save you track
                </button>
            </div>
            <TrackList/>
        </div>
    )
}