export default function Tracker() {

    const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    const color = ["red", "orange", "yellow", "green", "blue", "purple"]
    return (
        <>
            <div>Track you rainbow</div>
            {week.map((i) => {
                return (
                    <div>
                        <h2>{i}</h2>
                        {color.map((c) => {
                            return (
                                <>
                                    <p>{c}</p>
                                    <input type="checkbox" name="interest"/>
                                </>
                            )
                        })}
                    </div>)


            })}
        </>
    )
}