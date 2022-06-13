import React from "react";
import classes from "./button.module.css";

interface Props
  extends Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    "title" | "style" | "className"
  > {
  buttonText: string;
}

function Button({ buttonText }: Props) {
  return (
    <a href="https://google.com" className={classes.button}>
      {buttonText}
    </a>
  );
}

export default Button;
