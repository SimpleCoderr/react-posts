import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers(
    {
        postsPage: postsReducer,
        app: appReducer,
        usersPage: usersReducer
    }
)

export default rootReducer