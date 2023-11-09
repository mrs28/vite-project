import React from "react";
import {
  CapabilitiesContainer,
  CapabilitiesTitleBox,
  StarLeft,
  CapabilitiesTitle
} from "./styles";
import Squeezebox from "../Squeezebox/Squeezebox";

const OurCapabilities: React.FC = () => {
  return (
    <CapabilitiesContainer>
      <CapabilitiesTitleBox>
        <StarLeft 
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1698274626/logo_2_wc5jwp.png"
        alt="foto light dots" 
        width={50}
        height={50}       />
        <CapabilitiesTitle>
          Our Capabilities
        </CapabilitiesTitle>

      </CapabilitiesTitleBox>

      <Squeezebox/>
    </CapabilitiesContainer>
  );
};

export default OurCapabilities;
