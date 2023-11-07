import React from 'react';
import { FooterContainer, ContainerLeft, List, ContainerRight,    } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
       <ContainerLeft>
       <List>
        <li>ABOUT</li>
        <li>ABOUT</li>
        <li>ABOUT</li>
       </List>
       <List>
        <li>ABOUT</li>
        <li>ABOUT</li>
        <li>ABOUT</li>
       </List>
       </ContainerLeft>


        <ContainerRight>
        <List>
        <li>ABOUT</li>
        <li>ABOUT</li>
        <li>ABOUT</li>
       </List>
        </ContainerRight>

    </FooterContainer>
  )
}

export default Footer