import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../enums/router";
import { Wrapper } from "./headerOpenStyle";

function HeaderOpenIn() {
    return (    
      <>
        <div><Link to={AppRoute.PostsPage}>All posts</Link></div>
        <div>
            <Link to={AppRoute.PostsPage}>My posts</Link>
            <Link to={AppRoute.AddPost}>Add posts</Link>            
        </div>
        <div><Link to ="/">Log out</Link></div> 
      </>      
    ); 
}

function HeaderOpenOut() {
  return ( 
        <div>
          <Link to={AppRoute.SignIn}>Login</Link>
          <Link to={AppRoute.Registration}>Registration</Link>
        </div>     
  ); 
}

function HeaderOpen() {  
  const isLogIn = false// пока так

  return (
    <Wrapper>
     {isLogIn ? <HeaderOpenIn/>:<HeaderOpenOut/>}   
    </Wrapper> 
  ); 
}

export default HeaderOpen;
