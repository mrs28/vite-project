import React from "react";
import {
  CapabilitiesContainer,
  CapabilitiesTitleBox,
  CapabilitiesTitle,
  TitleLeft,
} from "./styles";
import Squeezebox from "../Squeezebox/Squeezebox";

const OurCapabilities: React.FC = () => {
  return (
    <CapabilitiesContainer>
      <CapabilitiesTitleBox>
        <TitleLeft>Get to know us</TitleLeft>

        <CapabilitiesTitle>Our Capabilities</CapabilitiesTitle>
      </CapabilitiesTitleBox>

      <Squeezebox />
    </CapabilitiesContainer>
  );
};

export default OurCapabilities;
