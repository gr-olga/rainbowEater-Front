import wheel from "../image/cilorWheel.png"
import {useSelector} from "react-redux";
import {selectProducts} from "../store/productsState/selectors";
import {selectColors} from "../store/appState/selectors";
import {useState} from "react";
import {Link} from "react-router-dom";


export const Homepage = () => {
    const products = useSelector(selectProducts)
    const colors = useSelector(selectColors)
    const [choosingColor, setChoosingColor] = useState('')

    const randomColor = () => {
        const random = Math.floor(Math.random() * colors.length);
        console.log(random, colors[random]);
        setChoosingColor(colors[random])
    };

    return (
        <div>
            <div>
                <div>
                    <button onClick={() => randomColor()}>Random Color</button>
                    <img src={wheel}/>
                    <h4>{choosingColor}</h4>
                </div>
                <div>
                    {colors.map((c, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/product/${c}`}>
                                    <button onClick={() => console.log(c)}>{c}</button>
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            {products?.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <img src={item.image}/>
                    </div>
                )
            })}
        </div>
    )
}

