//import {createContext} from "react";
//export const AuthContext = createContext(null)
//export const IdUserContext = createContext(null)
//export const IdAdminContext = createContext(null)
import {createStore} from "redux";

const defaultState = {
    isAuth : "",
    isIdUser : null,
    isIdAdmin : null
}

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "setIsAuth":
            return{...state, isAuth: action.payload}
        case "setIdUser":
            return {...state, isIdUser: action.payload}
        case "setIdAdmin":
            return {...state, isIdAdmin: action.payload}
        default:
            return state
    }
}

export const api = createStore(reducer);