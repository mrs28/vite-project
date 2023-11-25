import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Elimina el tilde ~
import "slick-carousel/slick/slick-theme.css"; // Elimina el tilde
import { SliderContainer, ModalBox } from "./styles";
import Modal from "../Modal/Modal";

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
  const [selectedProject, setSelectedProject] = useState<string | null>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (projectId: string) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  // slick responsive
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {/* <SliderBox>
          <CardBox> */}
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            openModal={() => openModal(item.id)}
          />
        ))}
        {/* </CardBox>
        </SliderBox> */}
      </Slider>
      <ModalBox>
        {isModalOpen && selectedProject !== null && (
          <Modal projectId={selectedProject} onClose={closeModal} />
        )}
      </ModalBox>
    </SliderContainer>
  );
};

export default Carousel;

// Estamos importando items desde el archivo que contiene los datos y luego mapeando esos elementos para crear instancias de Card, pasando cada elemento del array como una propiedad item.

//Con esto, cada tarjeta Card recibirá un elemento diferente del array items, lo que  permitirá mostrar información de proyectos en cada tarjeta utilizando el componente Card.
