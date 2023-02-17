import { Button } from "react-bootstrap";
import Title from "../UI/title/Title";
import PostCreator from "./postCreator/PostCreator";

const PostsHeader = ({ isBigCards, ChangeSizeCards }) => {

    return (
        <div className="posts__header">
            <Title text={'Posts List'} />
            <div className="posts__btns">
                <Button variant="primary" onClick={ChangeSizeCards}>{isBigCards ? 'Make small cards' : 'Make big cards'}</Button>
                <PostCreator />
            </div>
        </div>
    )
}

export default PostsHeader;