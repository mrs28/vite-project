import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  margin: auto;
  position: relative;

  @media (max-width: 420px) {
    padding: 0;
  }
`;

export const CardImage = styled.img`
  width: 850px;
  height: 450px;
  margin: auto;

  @media (max-width: 420px) {
    width: 300px;
    height: 180px;
    overflow: hidden;
  }
`;

export const CardButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  right: 18rem;
  bottom: 6.8rem;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  position: absolute;

  @media (max-width: 420px) {
    width: 35px;
    height: 35px;
    right: 9rem;
    bottom: 5rem;
  }
`;

export const CardInfoDetail = styled.div`
  background-color: #000000;
  width: 100%;
  text-align: left;
  padding-left: 12rem;

  @media (max-width: 420px) {
    padding-left: 1rem;
  }
`;

export const CardCategory = styled.p`
  font-size: 0.8rem;
  color: #a9a9a9;
  padding: 0.5rem 0 0 0;
  margin-bottom: 0;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin: 0;
  cursor: pointer;

  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;
