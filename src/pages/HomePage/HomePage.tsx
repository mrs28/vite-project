import React from "react";
import {
  HomeContainer,
  BoxParagraph,
  SmallParagraph,
  Paragraph,
  BoxSphere,
  NavParagraph,
} from "./styles";
import MainImage from "../../components/pages/home/MainImage/MainImage";
import Nav from "../../components/Nav/Nav";
// import SouthEastIcon from '@mui/icons-material/SouthEast';


const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <NavParagraph>
       <Nav/>

        <BoxParagraph>
          <SmallParagraph>
            Building strong relations, creating stunning digital products
          </SmallParagraph>
          <Paragraph>Design. Development. Experiences.</Paragraph>
        </BoxParagraph>
      </NavParagraph>

      <BoxSphere>
        <MainImage />
      </BoxSphere>
    </HomeContainer>
  );
};

export default HomePage;
