import ButtonBurger from "./buttonBurger/buttonBurger";
import UserIcon from "./userIcon/userIcon";
import UserName from "./userName/userName";
import {MainHeader} from "./headerStyles";

function Header() {
  return (
  <MainHeader>   
      <ButtonBurger />
      <UserIcon />
      <UserName username="Alexandr" />
  </MainHeader>
  );
}

export default Header;
