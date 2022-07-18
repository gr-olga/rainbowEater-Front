import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postTrack} from "../../store/trackState/thunks";
import {selectTracker} from "../../store/trackState/selectors";
import "./Tracker.css"
import {selectColors, selectDays} from "../../store/appState/selectors";
import TrackList from "../../components/TrackList/TrackList";
import Chart from "../../components/Chart/Chart";

export default function Tracker() {
    const d = new Date();
    const dispatch = useDispatch()
    const tracker = useSelector(selectTracker)
    const [trackColor, setTrackColor] = useState([])
    const colors = useSelector(selectColors)
    const weekDay = useSelector(selectDays)
    const [dayIndex, setDayIndex] = useState(d.getDay());
    const [dayOfWeek, setDayOfWeek] = useState(weekDay[d.getDay()].toString())
    // let day = weekDay[d.getDay()].toString()

    console.log(tracker)

    const colorCounts = tracker.reduce((result, currentDay) => {
        console.log(currentDay)
        const colors = currentDay.color;
        colors.forEach(color => {
            if (Object.keys(result).includes(color)) {
                result[color] = result[color] + 1
            }
            else {
                result[color] = 1
            }
        })
        return result
    }, {})

    const chartData = Object.keys(colorCounts).map(color => ({title: color, value: colorCounts[color], color:color}))


    const handleSend = (day) => {
        dispatch(postTrack(day, trackColor))
        // / setTrackColor([])s
    }

    function getTrackerDay(tracker, dayOfWeek) {
        return tracker.find(td => td.day === dayOfWeek)
    }

    function isColorCheckedAtDay(trackerDay, color) {
        if (!trackerDay) return false;
        return trackerDay.color.includes(color)
    }

    const handleCheck = (color) => {
        if (trackColor.includes(color)) {
            setTrackColor(trackColor.filter((c) => c !== color))
        } else {
            setTrackColor([...trackColor, color])
        }
    }


    const handleDayChange = () => {
        const newIndex = (dayIndex + 1) % 7
        setDayIndex(newIndex)
        setDayOfWeek(weekDay[newIndex].toString())
    }

    return (
        <div className="trackPageBpx">
            <div className="pageTitle">Track you rainbow</div>
            <div className="trackBox">
                <h2 className="dayName">
                    <span>Today is </span>
                    <span>{dayOfWeek}</span>
                </h2>
                {colors.map((c, index) => {
                    return (
                        <div key={index}
                             className={'colorCh'}
                             style={{
                                 backgroundColor: isColorCheckedAtDay(getTrackerDay(tracker, dayOfWeek), c) ? `${c}` : '',
                             }}
                        >
                            <p className="colorName">{c}</p>
                            <input type="checkbox"
                                   name="interest"
                                   disabled={isColorCheckedAtDay(getTrackerDay(tracker, dayOfWeek), c)}
                                   onChange={() => handleCheck(c)}
                            />
                        </div>
                    )
                })}
                <button
                    className="btnColor"
                    onClick={() => handleSend(dayOfWeek)}
                >
                    save you track today
                </button>
            </div>
            <TrackList/>
            <button
                className="btnColor" style={{}}
                onClick={() => handleDayChange()}
            >
                Change day
            </button>
            < Chart data={chartData}/>
        </div>
    )
}