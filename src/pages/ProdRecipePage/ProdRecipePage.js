import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
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
    if (recipes) {
        return (
            <>
                {recipes.length !== 0 ?
                    (<RecipeList recipes={recipes}/>)
                    :
                    (<h3 style={{textAlign: "center", paddingTop: "40px", margin: "auto"}}>
                        We dont have recipes with tis product. You can add
                        <Link to="/add"> here</Link>
                    </h3>)
                }
            </>
        )
    }
}