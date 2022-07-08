import "./App.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserWithStoredToken} from "./store/user/thunks";
import {Route, Routes} from "react-router-dom";
import {MessageBox, Navigation} from "./components";
import {Homepage, Login, SignUp} from "./pages"
import {getProducts} from "./store/productsState/thunks";
import ColorPage from "./pages/ColorPage/ColorPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import {selectToken} from "./store/user/selectors";
import Tracker from "./pages/Tracker/Tracker";
import {getTrack} from "./store/trackState/thunks";


function App() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken)

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    useEffect(() => {
        dispatch(getUserWithStoredToken());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getTrack())
    }, [])

    return (
        <div>
            <Navigation/>
            <MessageBox/>
            <div className="mainBox">
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/product/:color" element={<ColorPage/>}/>
                    <Route path="/recipe" element={<RecipePage/>}/>
                    <Route path="/add" element={<AddRecipe/>}/>
                    {token && <Route exact path="/tracker" element={<Tracker/>}/>
                    }
                </Routes>
            </div>
        </div>
    );
}

export default App;