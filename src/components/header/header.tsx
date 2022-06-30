import ButtonBurger from "./buttonBurger/buttonBurger";
import {MainHeader} from "./headerStyles";
import ThemeIcon from "./themeIcon/themeIcon";
import { useState } from "react";
import HeaderClose from "./headerClose/headerClose";
import HeaderOpen from "./headerOpen/headerOpen";

function Header() {
const [isOpen, toggleOpen] = useState(false)

return (
        <MainHeader open = {isOpen}>   
          <ButtonBurger click = {()=>toggleOpen(!isOpen)}/>
          {isOpen ? <HeaderOpen/>:<HeaderClose/>}
          <ThemeIcon />
        </MainHeader>       

)}

export default Header;
