
const UserPosts = ({ posts }) => {

    return (
        <div className="userId__posts">
            {posts.map(post =>
                <div className="userId__post post">
                    <div className="userId__post-title">{post.title}</div>
                    <div className="userId__post-body">{post.body}</div>
                </div>
            )}
        </div >
    )
}

export default UserPosts;