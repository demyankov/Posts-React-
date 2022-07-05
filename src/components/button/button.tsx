import { Children } from "react";
import { Link } from "react-router-dom";
import { ButtonWrapper} from "./buttonStyles";
import { Buttons } from "./buttonType";

function Button({ children, maxWidth, click, url, ...otherProps }: Buttons) { 
  return (
    <ButtonWrapper maxWidth = {maxWidth}>
      <Link to = {url} onClick={click} className={otherProps?.disabled}>{children}       
      </Link>
    </ButtonWrapper>
  );
}

export default Button;

