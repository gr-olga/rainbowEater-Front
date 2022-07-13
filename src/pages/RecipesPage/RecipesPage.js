import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecipes} from "../../store/resipesState/thunks";
import {selectRecipes} from "../../store/resipesState/selectors";
import RecipeList from "../../components/RecipeList/RecipeList";

export default function RecipesPage() {
    const dispatch = useDispatch()
    const recipes = useSelector(selectRecipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [])

    return (
        <RecipeList recipes={recipes}/>
    )
}