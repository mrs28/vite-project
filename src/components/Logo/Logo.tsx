import React from "react";
import { LogoProps } from "../../types/props/logo.props";
import { BoxLogo, ImgLogo, NameLogo } from "./styles";

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <BoxLogo>
      <ImgLogo
        width={props.width}
        height={props.height}
        style={{ marginBottom: `${props.marginBottom}px` }}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1696537189/logo_gk0vnf.png"
        alt="esfera"
      
      />
        <NameLogo>
   {props.brandName}
        </NameLogo>
    </BoxLogo>
  );
};

export default Logo;
