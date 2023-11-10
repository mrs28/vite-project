import React from "react";
import { BoxHeader, NavList, List } from "./styles";
// import {  Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <BoxHeader>
      <Logo width={"35px"} height={"35px"} brandName={"MundoDev*"} />
      <NavList>
        <List>
            Home
        </List>
        <List>
            Projects
        </List>
        <List>
           CX
        </List>
        <List>
            Contact us
        </List>
     
        
        {/* <Link to="/">
          Home
        </Link>
        <Link to="/services">
          Services
        </Link>
        <Link to="/contact">
          Contact
        </Link> */}
      </NavList>
    </BoxHeader>
  );
};

export default Header;
