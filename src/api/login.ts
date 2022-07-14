import { LocalStorageKey } from "../enums/localStorageKey";
import { refreshAccessToken } from "./refreshToken";

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
}: ReguestTokenType): Promise<ResponseTokenType> {
  const responseToken = await fetch(apiToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(querryBody),
  });

  if (responseToken.ok) {
    const token = (await responseToken.json()) as ResponseTokenType;

    localStorage.setItem(LocalStorageKey.TokenAccess, token.access);
    localStorage.setItem(LocalStorageKey.TokenRefresh, token.refresh);

    return token;
  }
  return Promise.reject({
    status: responseToken.status,
    errors: [{ global: responseToken.statusText }],
  });
}

export async function userAuthorization(): Promise<UserType> {
  const TokenAccess = localStorage.getItem(LocalStorageKey.TokenAccess);

  const responseUser = await fetch(apiUser, {
    headers: {
      Authorization: `Bearer ${TokenAccess}`,
    },
  });

  if (responseUser.ok) {
    return (await responseUser.json()) as UserType;
  }

  if (responseUser.status === 401) {
    await refreshAccessToken();
    return userAuthorization();
  }

  return Promise.reject({
    status: responseUser.status,
    errors: [{ global: responseUser.statusText }],
  });
}
