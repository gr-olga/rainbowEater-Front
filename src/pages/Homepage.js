import wheel from "../image/cilorWheel.png"
import {useSelector} from "react-redux";
import {selectProducts} from "../store/productsState/selectors";
import Tracker from "./Tracker/Tracker";
import {selectColors} from "../store/appState/selectors";
import {useState} from "react";


export const Homepage = () => {
    // const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    const colors = useSelector(selectColors)
    const [choosingColor, setChoosingColor] = useState('')

    const randomColor = () => {
        const random = Math.floor(Math.random() * colors.length);
        console.log(random, colors[random]);
        setChoosingColor(colors[random])
    };


    // useEffect(() => {
    //     dispatch(getProducts())
    console.log(products);
    // }, [])

    return (
        <div>
            <div>
                <div>
                    <button onClick={() => randomColor()}>Random Color</button>
                    <img src={wheel}/>
                    <h4>{choosingColor}</h4>
                </div>
                <Tracker/>
                <div>
                    <button>Red</button>
                    <button>Orange</button>
                    <button>Yellow</button>
                    <button>Green</button>
                    <button>Blue</button>
                    <button>Purple</button>
                </div>
            </div>
            {products?.map((item) => {
                <>
                    <h4>item.title</h4>
                    <img src={item.image}/>
                </>
            })
            }
            {/*<div>*/}
            {/*    <h3>Recipe of the day</h3>*/}
            {/*    <img src={recipe}/>*/}
            {/*    <p>description</p>*/}
            {/*</div>*/}
        </div>
    )
}

