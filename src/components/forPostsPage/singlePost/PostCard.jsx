import { Card } from "react-bootstrap"
import PostButton from "../postButton/PostButton";

const PostCard = ({ color, title, body, setModalShow, changeColor }) => {

    return (
        <Card>
            <Card.Body className="postCard__body" style={{ backgroundColor: color }}>
                <Card.Title className="postCard__title">{title}</Card.Title>
                <Card.Text className="postCard__text">
                    {body.slice(0, 100) + '...'}
                </Card.Text>
                <div className="postCard__btns">
                    <PostButton onClick={() => setModalShow(true)} >View</PostButton>
                    <PostButton onClick={changeColor}>Change color</PostButton>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PostCard;