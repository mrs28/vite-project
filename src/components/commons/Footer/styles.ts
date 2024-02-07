import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: #0a0d0e;

  @media (max-width: 420px) {
    padding: 0.5rem;
    margin: 0;
    font-size: 1.3rem;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
`;

export const ContainerMenuLeft = styled.div`
  width: 75%;
  font-size: 1.2rem;

  @media (max-width: 420px) {
    width: 60%;
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-right: 1.2rem;
  cursor: pointer;

  @media (max-width: 420px) {
    margin-bottom: 0.3rem;
  }
`;

export const ContainerMenuRight = styled.div`
  width: 25%;
  padding-right: 3.5rem;
  font-size: 0.8rem;
  color: #e5e5e5;

  @media (max-width: 420px) {
    width: 40%;
  }
`;

export const ContainerCopyRight = styled.div``;
export const CopyRight = styled.p`
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;

`;
