import React from "react";
import Modal from "../components/Modal";
import { useState } from "react";

const Home = () => {
 
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
          Create Employee
        </button>
      <Modal toggle={modalState} action={openModal} />
    
    </div>
  );
 
};

export default Home;
