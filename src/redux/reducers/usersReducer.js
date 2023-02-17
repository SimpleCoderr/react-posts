import { USERS_CHANGE_PAGE, USERS_LOAD, USERS_TOTAL_COUNT } from "../types"

const initialState = {
    users: [],
    totalCount: 0,
    limit: 5,
    page: 1
}

 const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case USERS_LOAD: 
        return {
            ...state,
            users: action.payload
        }
        case USERS_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.data.totalCount
            }
        case USERS_CHANGE_PAGE:
            return {
                ...state,
                page: action.data.page
            }
        default: return {...state}
    }
}

export default usersReducer