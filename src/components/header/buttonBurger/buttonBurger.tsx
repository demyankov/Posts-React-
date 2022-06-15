import React from "react";
import classes from "./buttonBurger.module.css";

function ButtonBurger() {
  return (
    <button onClick={toggleMenuMode} className={classes.burgerBtn}>
      <span className={classes.burgerBtnItem}></span>
      <span className={classes.burgerBtnItem}></span>
      <span className={classes.burgerBtnItem}></span>
    </button>
  );
}

const toggleMenuMode = () => {};

export default ButtonBurger;
