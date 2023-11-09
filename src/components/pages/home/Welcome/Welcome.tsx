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
} from "./styles";

const Welcome: React.FC = () => {
  return (
    <WelcomeContainer>
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
