import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const combines = combineReducers({
    user: authReducer,
});

export default combines;