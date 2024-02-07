import styled from "styled-components";

export const GetInTouchContainer = styled.div`
  width: 100%;

  @media (max-width: 420px) {
    padding: 1rem;
  }
`;

export const GetInTouchTittleBox = styled.div`
  display: flex;

  @media (max-width: 420px) {
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

  @media (max-width: 420px) {
    width: 100%;
    padding: 1rem;
    height: 0;
    text-align: left;
    padding-left: 1.3rem;
  }
`;

export const GetInTouchTitle = styled.h2`
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  padding-left: 15rem;

  @media (max-width: 420px) {
    margin: 0;
    padding-left: 1.3rem;
    text-align: left;
    font-size: 1.3rem;
  }
`;
