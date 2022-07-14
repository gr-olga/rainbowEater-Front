import "./RecipeList.css"
import {useState} from "react";
import Display from "./Display"

export default function RecipeList(props) {
    const [show, setShow] = useState(false);


    return (
        <div className="recipeBox">
            <h2 className="pageTitle">Recipes</h2>
            <div className="oneBox">
                {props.recipes?.map((r) => {
                    return (
                        <div className="box" key={r.id}>
                            <h3 className="resTitle">{r.title}</h3>
                            <img className="resImage" src={r.image}/>
                            <Display description={r.description}/>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}