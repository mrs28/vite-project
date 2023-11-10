import React from 'react';
import { FormContainer, FormName, FormEmail, FormDescription } from "./styles";

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

    </FormContainer>
  )
}

export default Form