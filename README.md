



### Install

Install from terminal `npm i hrnet_component_plugin_modal`

### Usage

For the Modal components open button (for exemple):<br/>
`import ButtonOpenModal from 'ButtonOpenModal'`

### Exemple

`import React from "react";`<br/>
`import { Modal } from "hrnet_component_plugin_modal";`<br/>
`import { useState } from "react";`<br/>
<br/>
`const ButtonOpenModal = () => {`<br/>
 ` const [modalState, setModalState] = useState(false);`<br/>
<br/>
 ` function openModal() {`<br/>
   ` setModalState(!modalState);`<br/>
  `}`<br/>
<br/>
`  return (`<br/>
`    <div className="header-container">`<br/>
`      <button`<br/>
`        type="button"`<br/>
`        className="toggleModal nav-link"`<br/>
`        onClick={openModal}`<br/>
`      >`<br/>
`        Click-Me !`<br/>
`      </button>`<br/>
`      <Modal toggle={modalState} action={openModal} />`<br/>
`    </div>`<br/>
`  );`<br/>
`};`<br/>
<br/>
`export default ButtonOpenModal;`

### Use Modal
In a React app, use the Modal components in App.js:<br/>
`import Modal from 'hrnet_component_plugin_modal/dist/component/Modal`<br/>
<br/>
Insert:<br/>
`<Modal />`


### Close/Image

For the "closing and image" image, import an svg in an images folder in public and rename `closeModal.svg` and `imgModal.svg`

### Editable project

 The editable project can be retrieved from github                   |
Link: [Modal plugin](https://github.com/Nanosor57GIT-HUB/HRnet_P14_plugin_modal)
