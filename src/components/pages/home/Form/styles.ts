import styled from "styled-components";

export const FormBox = styled.form`
  width: 49%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 6rem;

  @media (max-width: 380px) {
    width: 80%;
  }
`;

export const InputName = styled.input`
  height: 4rem;
  border: none;
  border-bottom: 1px solid #696969;
  background-color: #000000;
  color: white;
`;

export const InputEmail = styled.input`
  height: 4rem;
  border: none;
  border-bottom: 1px solid #696969;
  background-color: #000000;
  color: white;
`;

export const InputDescription = styled.input`
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
`;

export const FormButton = styled.button`
  width: 15%;
  height: 4rem;
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  background-color: #000000;
  color: white;
  cursor: pointer;

  @media (max-width: 380px) {
    width: 30%;
  }

`;
