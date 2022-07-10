import {useDispatch, useSelector} from "react-redux";
import {selectProductsByColor} from "../../store/productsState/selectors";
import {getProductsByColor} from "../../store/productsState/thunks";
import {useEffect} from "react";
import {useParams} from "react-router-dom";


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
        <div>
            <div>Products by color</div>
            {productsByColor?.map((i) => {
                return (
                    <div key={i.id}>
                        <p>{i.title}</p>
                        <img src={i.image}/>
                    </div>
                )
            })}

        </div>
    )
}