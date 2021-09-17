import React from "react";

//opens when an image is clicked, and closes upon being clicked
const Modal = ({slide, closeModal}) => (
  <div 
    className="modal"
    onClick={() => closeModal()}
  >
    <img
      className="modal-img"
      src={`images/${slide.image}`}
      alt={slide.alt}
    />
  </div>
)

export default Modal;