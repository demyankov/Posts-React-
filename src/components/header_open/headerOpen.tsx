import React from "react";
import ButtonBurgerOpen from "./buttonBurger/buttonBurgerOpen";
import classes from "./headerOpen.module.css";
import Posts from "./posts/posts";

// type Props = {
//   header: string;
//   burgerBtn: string;
//   userIcon: string;
//   userName: string;
// };

function HeaderOpen() {
  // const [isActive, toggleMenuMode] = React.useState<boolean>(false);
  return (
    <nav className={classes.header}>
      <div className={classes.active}>
        <ButtonBurgerOpen />
        <Posts />
      </div>
    </nav>
  );
}

export default HeaderOpen;
