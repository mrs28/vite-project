import styled from "styled-components";

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
  margin-right: 2rem;

  @media (max-width: 420px) {
    margin-left: 1.2rem;
    margin-top: 0.5rem;
  }
`;

export const ImgLogo = styled.img`
  @media (max-width: 420px) {
    width: 18px;
    height: 18px;
  }
`;

export const NameLogo = styled.h1`
  font-size: 1rem;
  padding: 0.5rem;

  @media (max-width: 420px) {
    font-size: 0.7rem;
    padding: 0.3rem;
  }
`;
