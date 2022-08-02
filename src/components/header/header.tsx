import ButtonBurger from "./buttonBurger/buttonBurger";
import {MainHeader} from "./headerStyles";
import {useState } from "react";
import HeaderClose from "./headerClose/headerClose";
import HeaderOpen from "./headerOpen/headerOpen";
import { useUserContext } from "../Contexts/UserAuthorization/userContext";
import ThemeSwitcher from "./themeIcon/themeSwitcher";
import { useOutside } from "../../utils/useOutside";

function Header() {
const {user} = useUserContext()
const {ref, isShow, setIsShow} = useOutside(false)

return (
        <MainHeader open = {isShow} ref={ref}>             
          <ButtonBurger click = {()=>setIsShow(!isShow)}/>
          {isShow ? <HeaderOpen user= {user}/>:<HeaderClose>{user?.username}</HeaderClose>}
         <ThemeSwitcher/>
        </MainHeader>      

)}

export default Header;
