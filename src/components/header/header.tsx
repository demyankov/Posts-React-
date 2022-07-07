import ButtonBurger from "./buttonBurger/buttonBurger";
import {MainHeader} from "./headerStyles";
import {useState } from "react";
import HeaderClose from "./headerClose/headerClose";
import HeaderOpen from "./headerOpen/headerOpen";
import { useUserContext } from "../Contexts/UserAuthorization/userContext";
import ThemeSwitcher from "./themeIcon/themeSwitcher";

function Header() {
const {user} = useUserContext()
const [isOpen, toggleOpen] = useState(false)

return (
        <MainHeader open = {isOpen}>             
          <ButtonBurger click = {()=>toggleOpen(!isOpen)}/>
          {isOpen ? <HeaderOpen user= {user}/>:<HeaderClose>{user?.username}</HeaderClose>}
         <ThemeSwitcher/>
        </MainHeader>      

)}

export default Header;
