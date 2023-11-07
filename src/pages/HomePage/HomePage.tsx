import React from "react";
import {
  HomeContainer,
  BoxParagraph,
  SmallParagraph,
  Paragraph,
  BoxSphere,
  MainBox,
} from "./styles";
import MainImage from "../../components/pages/home/MainImage/MainImage";

import Header from "../../components/Header/Header";


 
// import SouthEastIcon from '@mui/icons-material/SouthEast';

const HomePage: React.FC = () => {
  return (
    <HomeContainer>

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


    </HomeContainer>




  );
};

export default HomePage;
