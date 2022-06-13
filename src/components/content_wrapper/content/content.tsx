import React from "react";
import classes from "./content.module.css";

type Props = {
  text: string;
};

function Content({ text }: Props) {
  return <p className={classes.content}>{text}</p>;
}

export default Content;
