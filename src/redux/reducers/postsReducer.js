import { POSTS_PAGE_INCREMENT, POSTS_LOAD, POST_ADD, POST_DELETE, POST_STATE_CLEAR, POST_TEXT_CHANGES_SAVE, POSTS_TOTAL_COUNT_SET } from "../types";

const initialState = {
    posts: [],
    totalCount: 0,
    page: 1,
    limit: 10
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_LOAD:
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }
        case POST_ADD:
            return {
                ...state,
                posts: [...state.posts, action.data.post]
            }
        case POSTS_TOTAL_COUNT_SET:
            return {
                ...state,
                totalCount: action.data.totalCount
            }
        case POSTS_PAGE_INCREMENT:
            return {
                ...state,
                page: state.page + 1
            }
        case POST_DELETE:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.data.id)
            }
        case   POST_TEXT_CHANGES_SAVE:
            const index = state.posts.findIndex(post => post.id == action.data.id)
            return {
                ...state,
                posts: [
                    ...state.posts.slice(0, index),
                    {
                        ...state.posts[index],
                        body: action.data.text
                    },
                    ...state.posts.slice(index + 1)
                ]
            }
        case POST_STATE_CLEAR:
            return {
                ...initialState
            }
        default:
            return state
    }
}