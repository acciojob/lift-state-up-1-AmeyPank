import React, { useState } from 'react';

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <ChildComponent showModal={showModal} handleButtonClick={handleButtonClick} />
    </div>
  );
};

const ChildComponent = ({ showModal, handleButtonClick }) => {
  return (
    <div className="child">
      <h3>Child Component</h3>
      <button onClick={handleButtonClick}>Show Modal</button>
      {showModal && <Modal />}
    </div>
  );
};

const Modal = () => {
  return (
    <div className="modal">
      <h4>Modal</h4>
      <p>This is a modal component.</p>
    </div>
  );
};

export default ParentComponent;
