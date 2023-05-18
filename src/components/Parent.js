import React, { useState } from 'react';

const Parent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent showModal={showModal} handleButtonClick={handleButtonClick} />
    </div>
  );
};

const ChildComponent = ({ showModal, handleButtonClick }) => {
  return (
    <div className="child">
      <h1>Modal Content</h1>
      <button onClick={handleButtonClick}>Show Modal</button>
      {showModal && <Modal />}
    </div>
  );
};

const Modal = () => {
  return (
    <div className="modal">
      <h1>Modal</h1>
      <p>This is a modal component.</p>
    </div>
  );
};

export default Parent;
