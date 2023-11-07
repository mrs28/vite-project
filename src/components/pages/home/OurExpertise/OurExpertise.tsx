import React from "react";
import {
  ExpertiseContainer,
  ExpertiseTitleBox,
  SliderCount,
  Title,
} from "./styles";
import Carousel from "../Carousel/Carousel";

const OurExpertise: React.FC = () => {
  return (
    <ExpertiseContainer>
      <ExpertiseTitleBox>
        <SliderCount> hola</SliderCount>
        <Title>Our Projects</Title>
      </ExpertiseTitleBox>

      <Carousel/>
    </ExpertiseContainer>
  );
};

export default OurExpertise;
