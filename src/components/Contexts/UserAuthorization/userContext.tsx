import React, { createContext, useContext, useMemo, useState } from "react";

import {
  getToken,
  ResponseTokenType,
  userAuthorization,
  UserType,
} from "../../../api/login";
import { LocalStorageKey } from "../../../enums/localStorageKey";

interface UserDataType {
  user: UserType | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  userAuthorization: ({ ...token }: ResponseTokenType) => void;
}

export const UserContext = createContext<UserDataType | null>(null);

export const useUserContext = (): UserDataType => {
  const useUserContext = useContext(UserContext);
  if (!useUserContext) {
    throw new Error("Trying to access User Context outside provider");
  }

  return useUserContext;
};

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<UserType | null>(null);

  const value = useMemo(
    () => ({
      user,
      login: async (email: string, password: string) => {
        const token = await getToken({ email, password });
        const userResponse = await userAuthorization();
        setUser(userResponse);
      },
      logout: () => {
        localStorage.removeItem(LocalStorageKey.TokenAccess);
        localStorage.removeItem(LocalStorageKey.TokenRefresh);
        setUser(null);
      },
      userAuthorization: async ({ ...token }: ResponseTokenType) => {
        const userResponse = await userAuthorization();
        setUser(userResponse);
      },
    }),
    [user?.id]
  );

  return <UserContext.Provider value={value}>{children} </UserContext.Provider>;
}
