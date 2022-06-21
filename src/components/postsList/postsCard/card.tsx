import React from "react";
import classes from "./card.module.css";
import { CardDate, CardImage, CardImageWrapper, CardText, CardTitle, CardWrapper } from "./cardStyle";
import { CardType } from "./cardType";

function Card({ url, cardTitle, cardText, cardDate }: CardType): JSX.Element {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={url} alt="About post" />
      </CardImageWrapper>
      <CardTitle>{cardTitle}</CardTitle>
      <CardText>{cardText}</CardText>
      <CardDate>{cardDate}</CardDate>
    </CardWrapper>
  );
}

export default Card;
