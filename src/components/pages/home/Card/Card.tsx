import React from "react";
import {
  CardContainer,
  CardImage,
  CardButton,
  CardInfoDetail,
  CardCategory,
  CardTitle,
} from "./styles";

import { CardProps } from "../../../../types/props/card.props";

const Card: React.FC<CardProps> = ({ item, openModal }) => {
  return (
    <CardContainer>
      <CardImage src={item.img} alt="project picture" />
      <CardButton onClick={openModal}> + </CardButton>
      <CardInfoDetail>
        <CardCategory>{item.category}</CardCategory>
        <CardTitle>{item.name}</CardTitle>
      </CardInfoDetail>
    </CardContainer>
  );
};

export default Card;
