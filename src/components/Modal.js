import React, {useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement("#root")
const Modal_comp = () => {
    const [modalIsOpen, setModalOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>

            <div className="d-flex mx-auto">
                <Modal isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={true} 
                onRequestClose={() => setModalOpen(false)}
                style={{
                    content:{
                        color:'white'
                    }
                }}
                className="modal-content"
                >
                    <h3>Date & time: </h3>
                    <h3>Location: </h3>
                    <h3>Ip Address: </h3>
                    <h3>Device Id: </h3>
                    <h3>Geolocation: </h3>
                    <button onClick={() => setModalOpen(false)}>Close</button>
                </Modal>
            </div>
        </div>
    )
}
export default Modal_comp
