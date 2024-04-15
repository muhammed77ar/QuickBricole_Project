// BackDrop.js
import React from "react";
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ showContent }) => (showContent ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

export default function BackDrop({ closeModal, showContent }) {
  const handleClick = () => {
    if (showContent) {
      closeModal();
    }
  };

  return <Backdrop showContent={showContent} onClick={handleClick} />;
}
