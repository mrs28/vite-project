import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  background-size: cover;

  @media (max-width: 380px) {
    height: 200px;
  }
`;
