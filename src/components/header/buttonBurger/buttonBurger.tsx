import React from "react";
import classes from "./buttonBurger.module.css";
import { BurgerBtn, BurgerBtnItem } from "./buttonBurgerStyles";

function ButtonBurger() {
  return (
    <BurgerBtn onClick={toggleMenuMode}>
      <BurgerBtnItem/>
      <BurgerBtnItem/>
      <BurgerBtnItem/>
    </BurgerBtn>
  );
}

const toggleMenuMode = () => {};

export default ButtonBurger;
