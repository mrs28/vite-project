import React from "react";
import {
  CardContainer,
  CardImage,
  CardButton,
  CardCategory,
  CardTitle,
} from "./styles";

import { CardProps } from "../../../../types/props/card.props";

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <CardContainer>
      <CardImage src={item.img} alt="project picture" />
      <CardButton> + </CardButton>
      <CardCategory>{item.category}</CardCategory>
      <CardTitle>{item.name}</CardTitle> 
    </CardContainer>
  );
};

export default Card;
