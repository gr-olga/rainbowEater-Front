import wheel from "../image/cilorWheel.png"
import recipe from "../image/banner-pic2.png"


export const Homepage = () => {

    return (
        <div>
            <div>
                <div>
                    <button>Random Color</button>
                    <img src={wheel}/>
                </div>
                <div>
                    <button>Red</button>
                    <button>Orange</button>
                    <button>Yellow</button>
                    <button>Green</button>
                    <button>Blue</button>
                    <button>Purple</button>
                </div>
            </div>
            <div>
                <h3>Recipe of the day</h3>
              <img src={recipe}/>
                <p>description</p>
            </div>
        </div>
    )
}

