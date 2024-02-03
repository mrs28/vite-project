import styled from "styled-components";

export const BoxHeader = styled.div`
  display: flex;
  padding: 1rem;
  width: 82%;
  justify-content: space-between;

  @media (max-width: 420px) {
    padding: 0.5rem;
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  width: 50%;
  padding: 1rem 0 1rem 0;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 420px) {
    display: none;
  }
`;

export const List = styled.li`
  cursor: pointer;
`;
