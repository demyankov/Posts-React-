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
  );
}

export default Button;
