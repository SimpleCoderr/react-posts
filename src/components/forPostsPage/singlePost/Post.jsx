import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import PostModal from "./PostModal";

const colors = ['rgb(207, 207, 207)', '#5555FF', ' #FFB841', '#964B00', '#F19CBB']

const Post = ({ id, title, body }) => {

    const [color, setColor] = useState(0)
    const [bodyText, setBodyText] = useState(body)
    const [modalShow, setModalShow] = useState(false)

    const randomNum = Math.random() * (colors.length - 1)

    useEffect(() => {
        setColor(Math.round(randomNum))
    }, [])

    const changeColor = () => {
        setColor((color + 1) % colors.length)
    }

    return (
        <div className="post">
            <PostCard
                title={title}
                body={body}
                color={colors[color]}
                setModalShow={setModalShow}
                changeColor={changeColor}
            />
            <PostModal
                id={id}
                title={title}
                bodyText={bodyText}
                setBodyText={setBodyText}
                modalShow={modalShow}
                setModalShow={setModalShow}
            />
        </div>
    )
}
export default Post;