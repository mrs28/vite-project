import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0.5rem;
  buttom: 0.5rem;
  width: 92.5%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    width: 78%;
    padding: 0.5rem;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin: 0;
  cursor: pointer;
  padding: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 420px) {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
`;

export const ProjectDescription = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
  text-align: center;
  background-color: black;

  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

export const TechDescription = styled.p`
  padding: 1rem;

  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

export const BoxTechnologies = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
  background-color: #000000;

  @media (max-width: 420px) {
    width: 100%;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const ModalButton = styled.button`
  width: 10%;
  height: 8%;
  color: white;
  border-radius: 2px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  background-color: #1a1a1a;
  cursor: pointer;

  &:hover {
    background-color: #333333; 
  }

  @media (max-width: 420px) {
    width: 30%;
  }
`;
