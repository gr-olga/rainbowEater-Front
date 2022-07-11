import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getRecipesByProd} from "../../store/resipesState/thunks";
import {selectRecipesByProduct} from "../../store/resipesState/selectors";

export default function ProdRecipePage() {
    const dispatch = useDispatch()
    const params = useParams();
    const {id} = params
    const recipes = useSelector(selectRecipesByProduct)

    useEffect(() => {
        dispatch(getRecipesByProd(id))
    })

    return (
        <>
            <div>ProdRecipePage</div>
            {recipes?.map((r) => {
                return (
                    <div key={r.id}>
                        <h2>{r.title}</h2>
                        <img src={r.image}/>
                    </div>
                )
            })}
        </>
    )
}