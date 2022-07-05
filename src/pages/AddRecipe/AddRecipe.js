import {useState} from "react";

export default function AddRecipe() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [color, setColor] = useState('')

    return (
        <div>
            <form>
                <label>Name it</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <label>Describe it</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                <label>add picture</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}/>
                <label>Color it </label>
                <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}>
                    <option selected="red">Red</option>
                    <option selected="orange">Orange</option>
                    <option selected="yellow">Yellow</option>
                    <option selected="green">Green</option>
                    <option selected="blue">Blue</option>
                    <option selected="purple">Purple</option>
                </select>
                <button>Create a new recipe</button>
            </form>
        </div>
    )
}