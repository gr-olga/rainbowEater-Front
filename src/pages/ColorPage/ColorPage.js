import {useDispatch, useSelector} from "react-redux";
import {selectProductsByColor} from "../../store/productsState/selectors";
import {getProductsByColor} from "../../store/productsState/thunks";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import "./ColorPage.css"


export default function ColorPage() {
    const params = useParams();
    const {color} = params
    const dispatch = useDispatch()
    const productsByColor = useSelector(selectProductsByColor)

    useEffect(() => {
        dispatch(getProductsByColor(color))
    }, [])

    console.log(productsByColor);
    return (
        <div className="pageBox">
            <div className="pageName">Products by {color}</div>
            <div className="productListBox">
                {productsByColor?.map((i) => {
                    return (
                        <div key={i.id} className="productBox">
                            <p className="title">{i.title}</p>
                            <img src={i.image} className="image"/>
                            <span>
                           {i.description}
                        </span>
                            <Link to={`/recipes/${i.id}`}>
                                <button className="btn">Recipe</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}