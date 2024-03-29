import styled from "styled-components";

export const CapabilitiesContainer = styled.div`
  width: 100%;
  padding-bottom: 8rem;

  @media (max-width: 420px) {
    padding: 1rem;
    margin-bottom: 4rem;
  }
`;

export const CapabilitiesTitleBox = styled.div`
  display: flex;
  padding: 1rem 0 0 6rem;

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export const StarLeft = styled.img`
  padding-top: 3.8rem;
  text-align: justify;
`;

export const TitleLeft = styled.p`
  padding-top: 3rem;
  text-align: justify;
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;

  @media (max-width: 420px) {
    padding-top: 0;
    padding-left: 1.3rem;
  }
`;

export const CapabilitiesTitle = styled.h2`
  font-size: 3rem;
  padding-left: 8rem;

  @media (max-width: 420px) {
    padding: 0.5rem 0.5rem 0.5rem 1.3rem;
    margin: 0;
    font-size: 1.3rem;
  }
`;
