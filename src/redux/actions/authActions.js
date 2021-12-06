import { actionTypes } from "../types"

export function authUser(user) {
    return {
        type: actionTypes.AUTH,
        user
    };
}

export function isLogin(login) {
    return {
        type: actionTypes.LOGIN,
        login
    };
}

export function logoutUser() {
    return {
        type: actionTypes.LOGOUT
    };
}