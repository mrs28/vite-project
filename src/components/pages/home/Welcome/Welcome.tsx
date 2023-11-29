import React from "react";
import MainImage from "../MainImage/MainImage";
import Header from "../../../commons/Header/Header";
import {
  WelcomeContainer,
  BoxParagraph,
  SmallParagraph,
  Paragraph,
  BoxSphere,
  MainBox,
  BoxLogoResponsive,
  MainBoxResponsive,
} from "./styles";
import Logo from "../../../commons/Logo/Logo";

const Welcome: React.FC = () => {
  return (
    <WelcomeContainer>
        <BoxLogoResponsive>
          <Logo width={"25px"} height={"25px"} brandName={"MundoDev*"} />
        </BoxLogoResponsive>
        <MainBoxResponsive>
        <Paragraph>Design. Development. Experiences.</Paragraph>
      
        </MainBoxResponsive>


      <MainBox>
        <Header />
        <BoxParagraph>
          <SmallParagraph>
            Building strong relations, creating stunning digital products
          </SmallParagraph>
          <Paragraph>Design. Development. Experiences.</Paragraph>
        </BoxParagraph>
      </MainBox>

      <BoxSphere>
        <MainImage />
      </BoxSphere>
    </WelcomeContainer>
  );
};

export default Welcome;
