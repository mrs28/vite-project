import styled from "styled-components";

export const ImageBox = styled.div`
  width: 100%;

  @media (max-width: 380px) {
    width: 100%;
    background-color: red;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  background-size: cover;

  @media (max-width: 420px) {
    height: 190px;
  }
`;
