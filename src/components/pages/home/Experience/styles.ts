import styled from "styled-components";

export const ExperienceContainer = styled.div`
  padding: 2rem 0 2.5rem 5rem;

  @media (max-width: 420px) {
    padding: 1rem;
  }
`;

export const ExperienceBoxText = styled.div`
  display: flex;
  padding: 1rem 0 3rem 0;

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem 0;
  }
`;

export const ExperienceTextBoxLeft = styled.div`
  width: 17%;
  padding-top: 3rem;
  margin-right: 3rem;
  text-align: justify;
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;

  @media (max-width: 380px) {
    width: 100%;
    margin-left: 1.5rem;
  }
`;

export const ExperienceTextBoxCenter = styled.div`
  width: 18%;
  text-align: justify;
  margin-right: 0.5rem;

  @media (max-width: 380px) {
    width: 100%;
    margin-left: 3rem;
  }
`;

export const ExperienceTextBoxRight = styled.div`
  width: 50%;
  padding-top: 2.5rem;
  text-align: justify;
  font-size: 1.1rem;
  font-family: "Roboto", sans-serif;

  @media (max-width: 380px) {
    width: 100%;
    padding: 0 1rem 0 1rem;
    font-size: 0.9rem;
  }
`;

export const ItemTextBox = styled.div`
  display: flex;
  align-items: center;
  justified-content: center;

  @media (max-width: 420px) {
    width: 40rem;
    padding: 0 1rem 0 1rem;
    font-size: 0.9rem;
  }
`;

export const ExperienceText = styled.p`
  text-align: left;
  margin: 0.6rem;

  @media (max-width: 420px) {
    padding-left: 0.5rem;
    font-size: 0.7rem;
  }
`;

export const ExperienceTitleCenter = styled.h2`
  width: 10rem;
  font-size: 3rem;
  font-family: "Roboto", sans-serif;

  @media (max-width: 420px) {
    padding: 0.5rem 0.5rem 0.5rem 1.3rem;
    margin: 0;
    font-size: 1.3rem;
  }
`;

export const ItemList = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  border-radius: 50%;
`;
