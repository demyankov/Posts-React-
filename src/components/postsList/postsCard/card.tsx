import React from "react";
import classes from "./card.module.css";

type CardType = {
  url: string;
  cardTitle: string;
  cardText: string;
  cardDate: string;
};

function Card({ url, cardTitle, cardText, cardDate }: CardType): JSX.Element {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.cardImageWrapper}>
        <img className={classes.cardImage} src={url} alt="About post" />
      </div>
      <h3 className={classes.cardTitle}>{cardTitle}</h3>
      <p className={classes.cardText}>{cardText}</p>
      <p className={classes.cardDate}>{cardDate}</p>
    </div>
  );
}

export default Card;
