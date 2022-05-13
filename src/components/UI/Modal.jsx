import React from "react";
import "./modal.css";

const Modal = (props) => {
  if (!props.active) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <div onClick={props.handleClose} className="overlay"></div>
        <div className="modal-content">
          {props.children}
          <button className="close-modal" onClick={props.handleClose}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
