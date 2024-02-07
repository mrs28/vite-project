import styled from "styled-components";

export const ExpertiseContainer = styled.div`
  width: 100%;
`;

export const ExpertiseTitleBox = styled.div`
  display: flex;
  padding: 1rem 0 0 6rem;

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const SliderCount = styled.p`
  width: 5rem;
  text-align: justify;
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  padding-top: 2.8rem;

  @media (max-width: 420px) {
    padding-left: 1.6rem;
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 3rem;
  padding-left: 10rem;

  @media (max-width: 420px) {
    width: 100%;
    padding-left: 1.8rem;
    margin: 0;
    font-size: 1.3rem;
  }
`;
