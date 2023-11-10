import React from 'react';
import { FormContainer, FormName, FormEmail, FormDescription, FormButtonBox, FormButton } from "./styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Form: React.FC = () => {
  return (
    <FormContainer>
        <FormName 
        type="text"
        name="name"
        placeholder="Your Name"/>
        <FormEmail
        type="email"
        name="email"
        placeholder="Your E-mail"/>
        <FormDescription
        type="text"
        name="description"
        placeholder="Describe your idea"/>
        <FormButtonBox>
        <FormButton>Send</FormButton>
        <ArrowForwardIcon/>
        </FormButtonBox>
     

    </FormContainer>
  )
}

export default Form