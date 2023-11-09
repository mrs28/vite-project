import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Elimina el tilde ~
import "slick-carousel/slick/slick-theme.css"; // Elimina el tilde
import { SliderContainer } from "./styles";

import { items } from "../../../../projectsMock";
import Card from "../Card/Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const data = [
//   {
//     img: "https://res.cloudinary.com/dzjf00pvx/image/upload/v1699371358/vista1_l5ffrd.png",
//   },
// ];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        {/* <SliderBox>
          <CardBox> */}
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
        {/* </CardBox>
        </SliderBox> */}
      </Slider>
    </SliderContainer>
  );
};

export default Carousel;

// Estamos importando items desde el archivo que contiene los datos y luego mapeando esos elementos para crear instancias de Card, pasando cada elemento del array como una propiedad item.

//Con esto, cada tarjeta Card recibirá un elemento diferente del array items, lo que  permitirá mostrar información de proyectos en cada tarjeta utilizando el componente Card.
