import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./headerOpenStyle";

function HeaderOpenIn() {
    return (    
      <>
        <div><Link to="posts">All posts</Link></div>
        <div>
            <Link to="posts">My posts</Link>
            <a href="#">Add posts</a>
        </div>
        <div><Link to ="/">Log out</Link></div> 
      </>      
    ); 
}

function HeaderOpenOut() {
  return ( 
        <div>
          <Link to="registration">Login</Link>
          <Link to="registration">Registration</Link>
        </div>     
  ); 
}

function headerOpen() {  
  const isLogIn = false // пока так

  return (
    <Wrapper>
     {isLogIn ? <HeaderOpenIn/>:<HeaderOpenOut/>}   
    </Wrapper> 
  ); 
}

export default headerOpen;
