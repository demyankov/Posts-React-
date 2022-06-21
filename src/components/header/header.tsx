import React from "react";
import ButtonBurger from "./buttonBurger/buttonBurger";
import UserIcon from "./userIcon/userIcon";
import UserName from "./userName/userName";
import classes from "./header.module.css";
import { HeaderWrapper } from "./headerStyles";

// type Props = {
//   header: string;
//   burgerBtn: string;
//   userIcon: string;
//   userName: string;
// };

function Header() {
  return (
  <header>
      <HeaderWrapper>
        <ButtonBurger />
        <UserIcon />
        <UserName username="Alexandr" />
      </HeaderWrapper>
    </header>
  );
}

export default Header;
