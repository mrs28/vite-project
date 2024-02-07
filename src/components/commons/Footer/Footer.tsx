import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
// import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

import {
  FooterContainer,
  ContainerMenu,
  ContainerMenuLeft,
  ContainerMenuRight,
  List,
  ListItem,
  ContainerCopyRight,
  CopyRight,
} from "./styles";
import Header from "../Header/Header";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContainerMenu>
        <ContainerMenuLeft>
          <Header />
        </ContainerMenuLeft>

        <ContainerMenuRight>
          <List>
            <ListItem>
              <LinkedInIcon></LinkedInIcon>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <InstagramIcon></InstagramIcon>
            </ListItem>
            <ListItem>
              {" "}
            <FacebookIcon></FacebookIcon>
            </ListItem>

          </List>
        </ContainerMenuRight>
      </ContainerMenu>

      <ContainerCopyRight>
        <CopyRight>Copyright 2024, MundoDev*. All Rights Reserved.</CopyRight>
      </ContainerCopyRight>
    </FooterContainer>
  );
};

export default Footer;
