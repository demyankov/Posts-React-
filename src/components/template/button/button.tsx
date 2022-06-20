<<<<<<< HEAD
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
=======
import classes from "./button.module.css";
import { ButtonWrapper, A } from "./buttonStyles";
import { Buttons } from "./buttonType";

function Button({ buttonText, maxWidth, ...otherProps }: Buttons) {
  return (
    <ButtonWrapper maxWidth = {maxWidth}>
      <A href="https://google.com" className={classes.button}>
        {buttonText}
      </A>
    </ButtonWrapper>
>>>>>>> HW_39
  );
}

export default Button;
