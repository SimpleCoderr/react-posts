import { LOADING_END, LOADING_START, LOGIN, LOGOUT } from "../types"

const initialState = {
    isLogin: false,
    isLoading: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true
            }
            case LOGOUT:
                return {
                    ...state,
                    isLogin: false
                }
         case LOADING_START: 
         return {
            ...state,
            isLoading: true
         } 
         case LOADING_END: 
         return {
            ...state,
            isLoading: false
         } 
        default:
            return state
    }
}