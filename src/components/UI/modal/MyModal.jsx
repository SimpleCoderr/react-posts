import { Modal } from "react-bootstrap";
import Title from "../title/Title"

const MyModal = ({show, onHide, children, title}) => {
    return (
        <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
    )
}

export default MyModal;