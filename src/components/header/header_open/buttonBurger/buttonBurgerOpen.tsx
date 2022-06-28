import React from "react";
import classes from "./buttonBurgerOpen.module.css";

function ButtonBurgerOpen() {
  return (
    <button>
      <span className={classes.burgerBtnItem}></span>
      <span className={classes.burgerBtnItem}></span>
      <span className={classes.burgerBtnItem}></span>
    </button>
  );
}

export default ButtonBurgerOpen;
