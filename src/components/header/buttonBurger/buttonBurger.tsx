
import React from "react";
import { BurgerBtn, BurgerBtnItem } from "./buttonBurgerStyles";

function ButtonBurger({click}:any) {
  return (
          <BurgerBtn onClick={click}>        
             <BurgerBtnItem/>
              <BurgerBtnItem/>
              <BurgerBtnItem/>
          </BurgerBtn> 
  );
}

export default ButtonBurger;
