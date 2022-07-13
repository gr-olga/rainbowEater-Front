import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRecipesByProduct} from "../../store/resipesState/selectors";
import {postNewRecipes} from "../../store/resipesState/thunks";
import "./AddRecipe.css"
import Cloudinary from "../../components/Cloudinary/Cloudinary";

export default function AddRecipe() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [color, setColor] = useState('')
    const [products, setProducts] = useState('')
    const newRecipe = useSelector(selectRecipesByProduct)

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(postNewRecipes(title, description, image, color, products))
    }


    return (
        <div className="mainForm">
            <form onSubmit={onFormSubmit} className="recForm">
                <label>Name it</label>
                <input
                    className="inputRes"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <label>Describe it</label>
                <input
                    className="inputRes"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                <label>add picture</label>
                <Cloudinary
                    className="inputRes"
                    image={image}
                    setImage={setImage}/>
                <label>Or you can add a link to an image from the Internet </label>
                <input type="text"
                       className="inputRes"
                       value={image}
                       onChange={(e) => setImage(e.target.value)}
                />
                <label>main product</label>
                <input type="text"
                       className="inputRes"
                       value={products}
                       onChange={(e) => setProducts(e.target.value)}/>
                <label>Color it </label>
                <select
                    className="inputRes"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}>
                    <option selected="red">Red</option>
                    <option selected="orange">Orange</option>
                    <option selected="yellow">Yellow</option>
                    <option selected="green">Green</option>
                    <option selected="blue">Blue</option>
                    <option selected="purple">Purple</option>
                </select>
                <button
                    className="subBtn"
                    type="submit" onClick={() => onFormSubmit}
                >
                    Create a new recipe
                </button>
            </form>
            {newRecipe ?
                <div>
                    <h3>{newRecipe.title}</h3>
                    <span>{newRecipe.description}</span>
                    <img src={newRecipe.image}/>
                </div> : <h9>add something new</h9>
            }
        </div>
    )
}