import styled from "styled-components";

export const GetInTouchContainer = styled.div`
  width: 100%;

  @media (max-width: 380px) {
    padding: 1rem;
  }
`;

export const GetInTouchTittleBox = styled.div`
  display: flex;

  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
  }
`;

export const GetInTouchTitleLeft = styled.p`
  width: 4rem;
  height: 6rem;
  text-align: justify;
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  padding-top: 2.8rem;
  padding-left: 6rem;

  @media (max-width: 380px) {
    width: 100%;
    padding: 1rem;
    height: 0;
    text-align: left;
    margin-left: 2rem;
  }
`;

export const GetInTouchTitle = styled.h3`
  text-align: justify;
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  padding-left: 11.5rem;

  @media (max-width: 380px) {
    padding: 1rem 0 1rem 1rem;
    margin: 0;
    margin-left: 3rem;
    text-align: left;
    font-size: 2rem;
  }
`;
