import React from 'react';
import "./main.css";


const Modal = (props) => {
//props transform(css)
const toggle = props.toggle
const action = props.action

    return (
      <div className={`container-modal ${toggle ? "active" : ""}`}>
        <div className="modal">
          <div className="ContainerCloseModal">
          <img
            src="../../images/closeModal.svg"
            className="closeModal"
            alt="close-modal"
            onClick={action}
          />
          <span className='close'>Close</span>
          </div>
          <div className='containerTitle'>
          <p className='hrnetTitle'>HRnet</p>
          <h1 className="TitleSociete">WealthHealth</h1>
          </div>
        </div>
      </div>
    );
};

export default Modal;
