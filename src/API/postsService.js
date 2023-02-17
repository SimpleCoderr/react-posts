import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default class PostsAPI {
    static async getPosts(page = 1, limit = 10) {
        const response = await axios.get(URL, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
    
    static async getPostById(id) {
        const response = await axios.get(`${URL}/${id}`)
        return response.data
    }
}