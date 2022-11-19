import React from "react";
import { Modal } from "hrnet_component_plugin_modal";
import { useState } from "react";

const ButtonOpenModal = () => {
  const [modalState, setModalState] = useState(false);

  function openModal() {
    setModalState(!modalState);
  }

  return (
    <div className="header-container">
      <button
        type="button"
        className="toggleModal nav-link"
        onClick={openModal}
      >
        Click-Me !
      </button>
      <Modal toggle={modalState} action={openModal} />
    </div>
  );
};

export default ButtonOpenModal;
