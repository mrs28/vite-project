import React from "react";
import { BoxHeader, NavList } from "./styles";
// import {  Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <BoxHeader>
      <Logo width={"35px"} height={"35px"} brandName={"MundoDev*"} />
      <NavList>
        <li>CONTACT</li>
        <li>CONTACT</li>
        <li>CONTACT</li>
        <li>CONTACT</li>
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