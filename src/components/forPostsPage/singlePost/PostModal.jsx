import { useState } from "react"
import { useDispatch } from "react-redux"
import { deletePostById, saveEditPostText } from "../../../redux/actions"
import MyModal from "../../UI/modal/MyModal"
import PostButton from "../postButton/PostButton"

const PostModal = ({ title, bodyText, setBodyText, id, modalShow, setModalShow }) => {
    const [textIsEdit, setTextIsEdit] = useState(false)

    const dispatch = useDispatch()

    function deletePost(id) {
        dispatch(deletePostById(id))
    }

    function editBodyText() {
        setTextIsEdit(true)
    }

    function changeBodyText(e) {
        setBodyText(e.currentTarget.value)
    }

    function saveChanges() {
        setTextIsEdit(false)
        dispatch(saveEditPostText(bodyText, id))
    }

    function hideModal() {
        setModalShow(false)
        setTextIsEdit(false)
    }
    return (
        <MyModal className='postModal' title={title} show={modalShow} onHide={hideModal}>
            <div className="postModal__wrapper">
                {textIsEdit
                    ?
                    <textarea 
                    onChange={changeBodyText} 
                    value={bodyText}
                     className='postModal__body'
                    />
                    :
                    <div className='postModal__body'>{bodyText}</div>
                }
                <PostButton
                    style={{ marginRight: '20px' }}
                    onClick={() => deletePost(id)}
                >
                    Delete
                </PostButton>
                {textIsEdit ?
                    <PostButton onClick={saveChanges}>Save changes</PostButton>
                    :
                    <PostButton onClick={editBodyText}>Edit</PostButton>}
            </div>
        </MyModal>
    )
}

export default PostModal;