import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getRecipesByProd} from "../../store/resipesState/thunks";
import {selectRecipesByProduct} from "../../store/resipesState/selectors";
import RecipeList from "../../components/RecipeList/RecipeList";

export default function ProdRecipePage() {
    const dispatch = useDispatch()
    const params = useParams();
    const {id} = params
    const recipes = useSelector(selectRecipesByProduct)

    useEffect(() => {
        dispatch(getRecipesByProd(id))
    })

    return (
        <RecipeList recipes={recipes}/>
    )
}