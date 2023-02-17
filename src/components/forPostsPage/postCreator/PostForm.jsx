import { useState } from "react"
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addPost } from "../../../redux/actions";
import MyInput from "../../UI/input/MyInput"

const PostForm = ({ onHide }) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const dispatch = useDispatch()

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post,
            id: uuid()
        }
        dispatch(addPost(newPost))
        onHide()
    }
    return (
        <form >
            <div className="form__wrapper">
                <MyInput
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.currentTarget.value })}
                    placeholder="enter title of post"
                    type="text"
                />
                <MyInput
                    type="text"
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.currentTarget.value })}
                    placeholder="enter description of post"
                />
                <MyInput
                    type="submit"
                    onClick={addNewPost}
                    placeholder="add post"
                />
            </div>
        </form>
    )
}

export default PostForm;