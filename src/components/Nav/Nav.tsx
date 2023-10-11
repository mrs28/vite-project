import React from "react";
import { BoxNav, NavList } from "./styles";
// import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

const Nav: React.FC = () => {
  return (
    <BoxNav>
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
    </BoxNav>
  );
};

export default Nav;
