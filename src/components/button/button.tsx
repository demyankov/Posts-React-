import { Link } from "react-router-dom";
import { AppRoute } from "../../enums/router";
import { ButtonWrapper } from "./buttonStyles";
import { Buttons } from "./buttonType";

function Button({
  children,
  maxWidth,
  click,
  url,
  disabled,
  ...otherProps
}: Buttons) {
  return (
    <ButtonWrapper maxWidth={maxWidth ? maxWidth : "100%"} {...otherProps}>
      <Link to={url ? url : AppRoute.Main} onClick={click} className={disabled}>
        {children}
      </Link>
    </ButtonWrapper>
  );
}

export default Button;
