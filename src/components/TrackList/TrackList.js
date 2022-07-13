import {useSelector} from "react-redux";
import {selectColors, selectDays} from "../../store/appState/selectors";
import {selectTracker} from "../../store/trackState/selectors";
import "./TrackList.css"

export default function TrackList() {
    const color = useSelector(selectColors)
    const week = useSelector(selectDays)
    const tracker = useSelector(selectTracker)

    function getTrackerDay(tracker, day) {
        return tracker.find(td => td.day === day)
    }

    function isColorCheckedAtDay(trackerDay, color) {
        if (!trackerDay) return false;
        return trackerDay.color.includes(color)
    }

    return (
        <div className="listBox">
            {week.map((day, index) => {
                return (
                    <div key={index} className="weekBox">
                        <h2 className="dayName">{day}</h2>
                        <div className="colorCheck">
                            {color.map((c, index) => {
                                return (
                                    <div key={index}
                                         className={'colorCh'}
                                         style={{
                                             backgroundColor: isColorCheckedAtDay(getTrackerDay(tracker, day), c) ? `${c}` : '',
                                         }}
                                    >
                                        <p className="colName">{c}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>)
            })}
        </div>
    )
}