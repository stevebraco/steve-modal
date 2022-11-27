# steve-modal


## Table of Contents

* [Installation](#installation)
* [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save steve-modal
    $ yarn add steve-modal


## Examples

Here is a simple example of react-modal being used in an app with some custom
styles and focusable input elements within the modal content:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'steve-modal';



function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        backgroundModal='red'
        background='black'
        width='500px'
        height='500px'
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

ReactDOM.render(<App />, appElement);
```

