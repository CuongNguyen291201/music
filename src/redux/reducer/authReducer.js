import { actionTypes } from "../types";

const initialState = {
    user: null,
    status: false,
    isLogin: false,
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH:
            return {
                ...state,
                user: action.user,
                status: true
            }
        
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                status: false
            }

        case actionTypes.LOGIN:
            return {
                ...state,
                isLogin: action.login
            }
        
        default:
            return state;
    }
};
