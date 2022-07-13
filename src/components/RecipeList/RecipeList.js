import "./RecipeList.css"
import {useState} from "react";

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
                            <button className="resBtn" onClick={() => setShow(prev => !prev)}>Description</button>
                            {show && <p className="resDisc">{r.description}</p>}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}