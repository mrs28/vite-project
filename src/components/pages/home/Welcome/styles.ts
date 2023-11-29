import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media (max-width: 380px) {
    height: 60vh;
    flex-direction: column;
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 380px) {
    display: none;
  }
`;

export const BoxParagraph = styled.div`
  display: flex;
  width: 60%;
  height: 50%;
  padding-top: 6rem;
  padding-left: 6rem;
  z-index: 1;

  @media (max-width: 380px) {
    display: none;
  }
`;

export const SmallParagraph = styled.p`
  width: 4rem;
  height: 8rem;
  text-align: justify;
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;

  @media (max-width: 380px) {
    display: none;
  }
`;

//*** Design Development Expeiencies ***/
export const Paragraph = styled.div`
  width: 45%;
  padding-left: 6rem;
  text-align: left;
  font-size: 5.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.1;
  left: 15.5rem;
  position: absolute;

  @media (max-width: 380px) {
    font-size: 2.1rem;
    left: 1rem;
    top: 8.1rem;
  }
`;

export const BoxSphere = styled.div`
  width: 30%;
  padding-right: 6rem;

  @media (max-width: 380px) {
    display: flex;
    width: 100%;
    justify-content: right;
    // background-color: red;
  }
`;

// *** RESPONSIVE VIEW ***
export const BoxLogoResponsive = styled.div`
  display: none;

  @media (max-width: 380px) {
    width: 100%;
    display: block;
    padding-left: 2rem;
  }
`;

export const MainBoxResponsive = styled.div`
  display: none;

  @media (max-width: 380px) {
    display: block;
    width: 100%;
  }
`;
