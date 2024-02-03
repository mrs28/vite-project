import React from "react";
import { Image, ImageBox } from "./styles";

const Banner: React.FC = () => {
  return (
    <ImageBox>
      <Image
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1699572881/fondo-pantalla-patron-fondo-abstracto-grunge-negro-foto-gratis_ijm5sq.jpg"
        height={400}
      />
    </ImageBox>
  );
};

export default Banner;
