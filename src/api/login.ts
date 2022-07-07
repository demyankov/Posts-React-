import { LocalStorageKey } from "../enums/localStorageKey";

const apiToken = `${process.env.REACT_APP_API_PATH}/auth/jwt/create/`;
const apiUser = `${process.env.REACT_APP_API_PATH}/auth/users/me/`;

export interface ReguestTokenType {
  email: string;
  password: string;
}

export interface ResponseTokenType {
  access: string;
  refresh: string;
}

export interface UserType {
  username: string;
  id: number;
  email: string;
}

export async function getToken({
  ...querryBody
}: ReguestTokenType):Promise<ResponseTokenType> {

  const responseToken = await fetch(apiToken, {  
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(querryBody),
  });

  if (responseToken.ok) {
    const token = await responseToken.json() as ResponseTokenType

    localStorage.setItem(LocalStorageKey.TokenAccess, token.access)
    localStorage.setItem(LocalStorageKey.TokenRefresh, token.refresh)  

    return token    
}
return Promise.reject({
  status: responseToken.status,
  errors: [{ global: "Token failed!" }],
});
}

export async function userAuthorization({...token}: ResponseTokenType): Promise<UserType> {
    const responseUser = await fetch(apiUser, {     
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.access}`
      },
    });

    console.log (token.access)
    console.log (responseUser)

    if (responseUser.ok) {     
      return await responseUser.json() as UserType
    }
    
 
    return Promise.reject({
      status: responseUser.status,
      errors: [{ global: "Avtorization failed!" }],
    });
    }
  
