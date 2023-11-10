import React from "react";
import {
  FooterContainer,
  ContainerLeft,
  List,
  ListItem,
  ContainerRight,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContainerLeft>
        <List>
         <ListItem>Projects</ListItem>
          <ListItem>CX</ListItem>
          <ListItem>Services</ListItem>
        </List>
      </ContainerLeft>

      <ContainerRight>
        <List>
        <ListItem>Instagram</ListItem>
        <ListItem>Contact us</ListItem>
        </List>
      </ContainerRight>
    </FooterContainer>
  );
};

export default Footer;
