import { LocalStorageKey } from "../enums/localStorageKey";

const apiPath = `${process.env.REACT_APP_API_PATH}/auth/jwt/refresh/`;
let refreshQuerryCount = 0;

export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem(LocalStorageKey.TokenRefresh);

  if (!refreshToken) {
    throw new Error("no refresh token in the local storage");
  }

  const response = await fetch(apiPath, {
    method: "Post",
    headers: {
      "content-Type": "application/json ",
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  if (response.ok) {
    const newAccessToken = (await response.json()) as { access: string };
    localStorage.setItem(LocalStorageKey.TokenAccess, newAccessToken.access);
    return newAccessToken;
  }

  if (response.status === 401 && refreshQuerryCount < 2) {
    refreshQuerryCount += 1;
    await refreshAccessToken();
  }

  return await Promise.reject({
    status: response.status,
    errors: { global: response.statusText },
  });
}
