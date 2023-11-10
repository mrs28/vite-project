import styled from "styled-components";

export const FormContainer = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 5rem;
`;

export const FormName = styled.input`
  height: 4rem;
  border: none;
  border-bottom: 1px solid #696969;
  background-color: #000000;
  color: white;
`;

export const FormEmail = styled.input`
  height: 4rem;
  border: none;
  border-bottom: 1px solid #696969;
  background-color: #000000;
  color: white;
`;

export const FormDescription = styled.input`
  height: 4rem;
  border: none;
  border-bottom: 1px solid #696969;
  background-color: #000000;
`;

export const FormButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
  cursor: pointer;
`;

export const FormButton = styled.button`
  width: 15%;
  height: 4rem;
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  background-color: #000000;
  color: white;
`;
