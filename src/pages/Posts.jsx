import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "../components/forPostsPage/PostsList";
import PostsHeader from "../components/forPostsPage/PostsHeader";
import PostsFilter from "../components/forPostsPage/PostsFilter";
import { clearStatePosts, loadPosts } from "../redux/actions";
import { usePosts } from "../hooks/usePosts";

const Posts = () => {
    const dispatch = useDispatch()
    const [isBigCards, setIsBigCards] = useState(true)
    const state = useSelector(state => state.postsPage)
    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    })

    useEffect(() => {
        return () => {
            dispatch(clearStatePosts())
        }
    }, [])

    useEffect(() => {
        dispatch(loadPosts(state.page, state.limit))
    }, [state.page])

    function changeSizeCards() {
        setIsBigCards(!isBigCards)
    }

    const sortedAndSearchedPosts = usePosts(state.posts, filter.sort, filter.query)

    return (
        <div className="containe">
            <div className="posts__wrapper">
                <PostsHeader ChangeSizeCards={changeSizeCards} isBigCards={isBigCards} />
                <PostsFilter filter={filter} setFilter={setFilter} />
                <PostsList isBigCards={isBigCards} posts={sortedAndSearchedPosts} totalCount={state.totalCount} />
            </div>
        </div >
    )
}

export default Posts;