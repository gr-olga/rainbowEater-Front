import { useState } from "react";

export default function Display({ description }) {

    const [show, setShow] = useState(false);

    return (
        <div>
            <button className="resBtn" onClick={() => setShow(!show)}>Description</button>
            { show && <p className="resDisc">{description}</p>}
        </div>
    )
}
