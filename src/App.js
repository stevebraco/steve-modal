import React from 'react';
import { useState } from 'react';
import './App.css';
import { Modal } from './lib';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <button onClick={openModal}>click</button>
      <p>
        Lorem ipsum dolor sit, amet consctetur adipisicing elit. Reprehenderit
        fugiat atque explicabo nisi llia odit nemo similique? Minus impedit ipsa
        quia quaerat eveniet maxime similique faceremnis? Dolorum, sit deleniti.
      </p>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <p>I am a modal</p>
        <button onClick={closeModal}>close modal</button>
      </Modal>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        fugiat atque explicabo nisi mollitia odit nemo similique? Minus impedit
        ipsa quia quaerat eveniet maxime similique facere omnis? Dolorum, sit
        deleniti.
      </p>
    </div>
  );
}

export default App;
