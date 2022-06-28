import ButtonBurger from "./buttonBurger/buttonBurger";

import UserIcon from "./headerClose/headerClose";

import {MainHeader} from "./headerStyles";
import ThemeIcon from "./themeIcon/themeIcon";

import { useState } from "react";
import HeaderOpen from "../header_open/headerOpen";
import HeaderClose from "./headerClose/headerClose";

function Header() {
const [isOpen, toggleOpen] = useState(false)

console.log(isOpen)
return (
        <MainHeader open = {isOpen}>   
          <ButtonBurger click = {()=>toggleOpen(!isOpen)}/>
          {isOpen ? <HeaderOpen/>:<HeaderClose/>}
          <ThemeIcon />
        </MainHeader>       

)}

export default Header;
