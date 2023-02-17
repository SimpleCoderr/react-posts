import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/users'

export default class usersService {
    static async getUsers(page = 1, limit = 5) {
        const response = await axios.get(URL, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
    static async getUserById(id) {
        const response = await axios.get(`${URL}/${id}`)
        return response
    }
    static async getPostsOfUserById(id) {
        const response = await axios.get(`${URL}/${id}/posts`)
        return response
    }
}