import React from "react";
import { DefaultProps } from "../../types/props/default.props";
import { LayoutContainer } from "./styles";


import Footer from "../Footer/Footer";

const LayoutHome: React.FC<DefaultProps> = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
   
      <Footer/>
    </LayoutContainer>
    
  )
};

export default LayoutHome;
