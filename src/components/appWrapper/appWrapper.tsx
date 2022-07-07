
import React, { useMemo } from "react";
import { LocalStorageKey } from "../../enums/localStorageKey";
import {useUserContext } from "../Contexts/UserAuthorization/userContext";
import { Wrapper } from "./appWrapperStyles";

function AppWrapper ({children}:any): JSX.Element {  

const {user, userAuthorization} = useUserContext()

const tokenAccess = localStorage.getItem(LocalStorageKey.TokenAccess) 
const tokenRefresh = localStorage.getItem(LocalStorageKey.TokenRefresh) 

useMemo(()=>{
  if (tokenAccess && tokenRefresh) {
  userAuthorization ({access:tokenAccess, refresh: tokenRefresh})}
},[])

  return (
    <Wrapper>
        {children}     
    </Wrapper>
  );
}

export default AppWrapper;