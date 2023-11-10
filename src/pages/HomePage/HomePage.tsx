import React from "react";
import { HomeContainer } from "./styles";

import Welcome from "../../components/pages/home/Welcome/Welcome";
import OurExpertise from "../../components/pages/home/OurExpertise/OurExpertise";
import Banner from "../../components/commons/Banner/Banner";
import OurCapabilities from "../../components/pages/home/OurCapabilities/OurCapabilities";
import Experience from "../../components/pages/home/Experience/Experience";
import GetInTouch from "../../components/pages/home/GetInTouch/GetInTouch";

// import SouthEastIcon from '@mui/icons-material/SouthEast';

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Welcome />
      <OurExpertise />
      <OurCapabilities />
      <Banner />
      <Experience />
      <GetInTouch />
    </HomeContainer>
  );
};

export default HomePage;
