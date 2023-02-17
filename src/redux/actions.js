import PostsAPI from "../API/postsService"
import usersService from "../API/usersService"
import { LOADING_END, LOADING_START, POSTS_PAGE_INCREMENT, POSTS_LOAD, POST_ADD, POST_DELETE, POST_STATE_CLEAR, POST_TEXT_CHANGES_SAVE, POSTS_TOTAL_COUNT_SET, USERS_LOAD, USERS_TOTAL_COUNT, USERS_CHANGE_PAGE, LOGIN, LOGOUT } from "./types"

// appReducer
export const startLoading = () => ({ type: LOADING_START })
export const endLoading = () => ({ type: LOADING_END })
export const setPostsTotalCount = (totalCount) => ({ type: POSTS_TOTAL_COUNT_SET, data: { totalCount } })
export const login = () => ({type: LOGIN})
export const logout = () => ({type: LOGOUT})

//postReducer
export const incrementPage = () => ({ type: POSTS_PAGE_INCREMENT })

export const loadPosts = (page, limit) => {
    return async (dispatch) => {
        dispatch(startLoading())
        const response = await PostsAPI.getPosts(page, limit)
        dispatch({ type: POSTS_LOAD, payload: response.data })
        dispatch(setPostsTotalCount(response.headers['x-total-count']))
        dispatch(endLoading())
    }
}

export const clearStatePosts = () => ({ type: POST_STATE_CLEAR })
export const addPost = (post) => ({ type: POST_ADD, data: { post } })
export const deletePostById = (id) => ({ type: POST_DELETE, data: { id } })
export const saveEditPostText = (text, id) =>
    ({ type: POST_TEXT_CHANGES_SAVE, data: { text, id } })

//usersReducer
export const loadUsers = (page, limit) => {
    return async (dispatch) => {
        dispatch(startLoading())
        const response = await usersService.getUsers(page, limit)
        dispatch({ type: USERS_LOAD, payload: response.data })
        dispatch(setUsersTotalCount(response.headers['x-total-count']))
        dispatch(endLoading())

    }
}
export const setUsersTotalCount = (totalCount) =>
    ({ type: USERS_TOTAL_COUNT, data: { totalCount } })
export const changePageUsers = (page) =>
    ({ type: USERS_CHANGE_PAGE, data: { page } })