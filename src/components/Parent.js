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
      <h2>Child Content</h2>
      <button onClick={handleButtonClick}>Show Modal</button>
      {showModal && <Modal />}
    </div>
  );
};

const Modal = () => {
  return (
    <div className="modal">
      <h3>Modal Content</h3>
      <p>This is the modal content.</p>
    </div>
  );
};

export default Parent;
