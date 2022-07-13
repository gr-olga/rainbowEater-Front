import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecipes} from "../../store/resipesState/thunks";
import {selectRecipes} from "../../store/resipesState/selectors";
import './RecipesPage.css'

export default function RecipesPage() {
    const dispatch = useDispatch()
    const recipes = useSelector(selectRecipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [])

    return (
        <div className="recipeBox">
            <h2 className="pageTitle">Recipes</h2>
            <div className="oneBox">
                {recipes?.map((r) => {
                    return (
                        <div className="box" key={r.id}>
                            <h3 className="resTitle">{r.title}</h3>
                            <img className="resImage" src={r.image}/>
                            <p className="resDisc">{r.description}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}