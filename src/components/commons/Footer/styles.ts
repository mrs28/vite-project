import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  // width: 100%;
  padding: 3rem 3.5rem 3rem 3.5rem;
  justify-content: space-between;
  background-color: #0a0d0e;
`;

export const ContainerLeft = styled.div`
  width: 80%;
  display: flex;
  font-size: 1.2rem;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const ContainerRight = styled.div`
  width: 20%;
  font-size: 0.8rem;
  color: #e5e5e5;
`;
