import { useState } from "react";
import { Button } from "react-bootstrap";
import PostForm from "./PostForm";
import MyModal from "../../UI/modal/MyModal";

const PostCreator = () => {
    const [modalShow, setModalShow] = useState(false)
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>add post</Button>
            <MyModal title='Add post' show={modalShow} onHide={() => setModalShow(false)}>
                <PostForm onHide={() => setModalShow(false)} />
            </MyModal>
        </>
    )
}

export default PostCreator;