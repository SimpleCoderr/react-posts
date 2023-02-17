import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage, loadPosts } from "../../redux/actions";
import Post from "./singlePost/Post";
import PostButton from "./postButton/PostButton";

const PostsList = ({ isBigCards, page, limit, posts, totalCount }) => {
    const dispatch = useDispatch()

    function addPosts(e) {
        dispatch(incrementPage())
    }

    const isShowingButton = totalCount > posts.length
    return (
        <>
            <div className="postList" style={{ gridTemplateColumns: `repeat(${isBigCards ? 2 : 3}, 1fr)` }}>
                {
                        posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} />)
                }
            </div>
            {isShowingButton && <PostButton style={{ marginTop: '30px', alignSelf: 'center', fontSize: '20px' }} onClick={addPosts}>Showe more</PostButton>}
        </>
    )
}

export default PostsList;