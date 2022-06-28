import { Outlet } from "react-router-dom";
import Header from "./header/header";

function MainLayout() { 
    return (
        <>
            <Header/>
            <Outlet/>
        </> 
    );
  }

  export default MainLayout