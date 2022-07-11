import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecipes} from "../../store/resipesState/thunks";
import {selectRecipes} from "../../store/resipesState/selectors";

export default function RecipesPage() {
    const dispatch = useDispatch()
    const recipes = useSelector(selectRecipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [])

    return (
        <div>
            <h2>Recipes</h2>
            {recipes?.map((r) => {
                return (
                    <div key={r.id}>
                        <h3>{r.title}</h3>
                        <img src={r.image}/>
                        <p>{r.description}</p>
                    </div>
                )
            })
            }
        </div>
    )
}