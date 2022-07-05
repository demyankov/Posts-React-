import { Children } from "react";
import { Link } from "react-router-dom";
import { ButtonWrapper} from "./buttonStyles";
import { Buttons } from "./buttonType";

function Button({ children, maxWidth, click, url, disabled }: Buttons) { 
  return (
    <ButtonWrapper maxWidth = {maxWidth}>
      <Link to = {url} onClick={click} className={disabled}>{children}       
      </Link>
    </ButtonWrapper>
  );
}

export default Button;

