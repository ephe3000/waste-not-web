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
          <h2>Hello Modal</h2>
          <p>plop</p>
          <button className="close-modal" onClick={props.handleClose}>
            CLOSE
          </button>
        </div>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default Modal;
