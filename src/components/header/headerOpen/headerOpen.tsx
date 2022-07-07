import { Link, NavLink } from "react-router-dom";
import { UserType } from "../../../api/login";
import { AppRoute } from "../../../enums/router";
import { useUserContext } from "../../Contexts/UserAuthorization/userContext";
import { Wrapper } from "./headerOpenStyle";

function HeaderOpenIn() {
    const {logout} = useUserContext()

    return (    
      <>
        <div><NavLink to={AppRoute.PostsPage}>All posts</NavLink></div>
        <div>
            <NavLink to={AppRoute.PostsPage}>My posts</NavLink>
            <NavLink to={AppRoute.AddPost}>Add posts</NavLink>            
        </div>
        <div><Link to ="/" onClick={
          ()=>{
            logout()
          }
        }>Log out</Link></div> 
      </>      
    ); 
}

function HeaderOpenOut() {
  return ( 
        <div>
          <NavLink to={AppRoute.Login}>Login</NavLink>
          <NavLink to={AppRoute.Registration}>Registration</NavLink>
        </div>     
  ); 
}

function HeaderOpen({user}: {user:UserType | null}) {  
  return (
    <Wrapper>
     {user? <HeaderOpenIn/>:<HeaderOpenOut/>}   
    </Wrapper> 
  ); 
}

export default HeaderOpen;
