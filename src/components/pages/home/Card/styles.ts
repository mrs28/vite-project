import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  padding: 0.5rem;
  //   border: 1px solid white;
  margin: auto;
  position: relative;
`;

export const CardImage = styled.img`
  width: 750px;
  height: 450px;
  margin: auto;
  background-color: pink;
`;

export const CardButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 14rem;
  bottom: 8rem;
`;

export const CardInfoDetail = styled.div`
  background-color: #000000;
  width: 100%;
  text-align: left;
  padding-left: 12rem;
  //   text-align: center;
`;

export const CardCategory = styled.p`
  font-size: 0.8rem;
  color: white;
  padding: 0.5rem 0 0 0;
  margin-bottom: 0;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin: 0;
`;
