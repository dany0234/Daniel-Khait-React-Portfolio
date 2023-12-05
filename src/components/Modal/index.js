const Modal = ({ selectedImage, setShowModal }) => {
    return (
        <div className="modal-background" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="modal-close">&times;</span>
                <img src={selectedImage} alt="Enlarged project" />
            </div>
        </div>
    );
};

export default Modal;