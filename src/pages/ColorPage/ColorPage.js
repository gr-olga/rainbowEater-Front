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
                            Red Delicious apples are one of the most well known commercially grown apples in the United States.
                            The Botanically, they are classified as Malus domestica. Red Delicious apples look a lot different
                            today than when they were first discovered. Over a perd of nearly 100 years, improvements were made,
                            altering the fruit’s shape, firmness, juiciness and even its color. Red Delicious is the parent apple
                            of several popular varieties like the Starkrimson, Empire and Fuji apples.
                        </span>
                            <Link to ={`/recipes/${i.id}`}>
                            <button className="btn">Recipe</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}