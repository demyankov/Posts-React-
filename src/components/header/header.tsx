import React from "react";
import ButtonBurger from "./buttonBurger/buttonBurger";
import UserIcon from "./userIcon/userIcon";
import UserName from "./userName/userName";
import classes from "./header.module.css";

// type Props = {
//   header: string;
//   burgerBtn: string;
//   userIcon: string;
//   userName: string;
// };

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.disactive}>
        <ButtonBurger />
        <UserIcon />
        <UserName username="Alexandr" />
      </div>
    </header>
  );
}

export default Header;
