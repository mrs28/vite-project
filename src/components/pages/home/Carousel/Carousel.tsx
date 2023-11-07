import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Elimina el tilde ~
import "slick-carousel/slick/slick-theme.css"; // Elimina el tilde 
import { SliderContainer } from "./styles";
const data = [
  {
    img: "https://res.cloudinary.com/dzjf00pvx/image/upload/v1699371358/vista1_l5ffrd.png"
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          {data.map((d) => (
            <div>
              <img width={700} height={450} src={d.img} alt="foto" />
            </div>
          ))}
        </div>

        
        <div>
          <h3>2</h3>
          {data.map((d) => (
            <div>
              <img width={700} height={450} src={d.img} alt="foto" />
            </div>
          ))}
        </div>

        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </SliderContainer>

    // <SliderContainer>
    //   <Slider {...settings}>
    //     {data.map((d) => (
    //       <div key={d.img}>
    //         {" "}
    //         {/* You should provide a unique key for each element */}
    //         <img width={180} height={180} src={d.img} alt="jjj" />

    //       </div>
    //     ))}
    //   </Slider>
    // </SliderContainer>
  );
};

export default Carousel;
