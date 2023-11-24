import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 1rem;
  buttom: 1rem;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const ModalContentText = styled.p`
 
`;

export const ModalContentImg = styled.img`
 
`;
