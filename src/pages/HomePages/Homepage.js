import wheel from "../../image/cilorWheel.png"
import {useSelector} from "react-redux";
import {selectProducts} from "../../store/productsState/selectors";
import {selectColors} from "../../store/appState/selectors";
import {useState} from "react";
import {Link} from "react-router-dom";
import "./HomePages.css"


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
        <div className="homeBox">
            <div className="colorsBox">
                <div className="colorBtnBox">
                <button onClick={() => randomColor()} className="colorBtn">
                    <img src={wheel}/>
                </button>
                {choosingColor && <Link to={`/product/${choosingColor}`} >
                    <h4 style={{color: choosingColor}}>Here all {choosingColor} products</h4>
                </Link>}
                </div>
                <div className="listOfBtn">
                    {colors.map((c, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/product/${c}`}>
                                    <button
                                        className="colorBtn"
                                        onClick={() => console.log(c)}
                                        style={{backgroundColor: c}}
                                    >
                                        {c}
                                    </button>
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="prodsBox">
                {products?.map((item) => {
                    return (
                        <div key={item.id} className="itemBox">
                            <h4 className="prodTitle">{item.title}</h4>
                            <img src={item.image} className="prodImage"/>
                            <Link to={`/recipes/${item.id}`}>
                                <button className="prodBtn">Recipe</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

