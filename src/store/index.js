import {configureStore} from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import prodReducer from "./productsState/slice";

export default configureStore({
    reducer: {
        appState: appStateReducer,
        user: userReducer,
        prodState: prodReducer
    },
});