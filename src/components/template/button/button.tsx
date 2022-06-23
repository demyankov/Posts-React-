import { ButtonWrapper, A } from "./buttonStyles";
import { Buttons } from "./buttonType";

function Button({ buttonText, maxWidth, click, ...otherProps }: Buttons) { 
  return (
    <ButtonWrapper maxWidth = {maxWidth}>
      <A onClick={click}>{buttonText}</A>
    </ButtonWrapper>
  );
}

export default Button;

