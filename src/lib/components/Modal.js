import React from 'react';
import styled from 'styled-components';

const ContainerModal = styled.section`
  background: ${(props) => props.background || 'rgba(0,0,0, .6)'};
  position: fixed;
  width: 100%;
  inset: 0;
`;

const ModalStyles = styled.div`
  background: ${(props) => props.backgroundModal || 'white'};
  width: ${(props) => props.width || '500px'};
  height: ${(props) => props.height || '300px'};
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 11px;
`;

const Modal = ({
  isOpen,
  onRequestClose,
  children,
  background,
  width,
  height,
  backgroundModal,
}) => {
  if (isOpen) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'auto';
  }

  if (isOpen) {
    return (
      <ContainerModal
        data-testid="modal"
        background={background}
        onClick={onRequestClose}
      >
        <ModalStyles
          width={width}
          height={height}
          backgroundModal={backgroundModal}
        >
          {children}
        </ModalStyles>
      </ContainerModal>
    );
  }
};

export default Modal;
