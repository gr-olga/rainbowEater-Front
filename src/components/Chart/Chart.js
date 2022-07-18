import {PieChart} from 'react-minimal-pie-chart';
import "./Chart.css"
export default function Chart(props) {

    return (
        <div className="chartBox">
            <PieChart
                data={props.data}
            />
        </div>
    )
}