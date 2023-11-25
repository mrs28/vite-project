import React from "react";
import {
  ModalContainer,
  ProjectTitle,
  ProjectDescription,
  TechDescription,
  BoxTechnologies,
  ModalButton,
} from "./styles";
import { items } from "../../../../projectsMock";

interface ModalProps {
  onClose: () => void;
  projectId: string;
}

const Modal: React.FC<ModalProps> = ({ projectId, onClose }) => {
  const project = items.find((item) => item.id === projectId);

  if (!project) {
    return null; // Puedes manejar el caso en que el proyecto no sea encontrado
  }

  return (
    <ModalContainer>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <BoxTechnologies>
        <TechDescription>
          Developed using the following technologies and tools:
        </TechDescription>
        <img src={project.technologies} alt="icons tech" />
      </BoxTechnologies>
      <ModalButton onClick={onClose}>Close</ModalButton>
    </ModalContainer>
  );
};
export default Modal;
