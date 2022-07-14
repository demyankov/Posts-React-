import { Navigate } from "react-router-dom";
import { useUserContext } from "../components/Contexts/UserAuthorization/userContext";
import { AppRoute } from "../enums/router";

export function PrivateRouter({
    authorizedOnly = true,
    redirectPage = AppRoute.Login,
    children,
  }: {
    authorizedOnly?: boolean;
    redirectPage?: string;
    children: JSX.Element;
  }): JSX.Element {
    const { user } = useUserContext();
  
    if ((!user && authorizedOnly) || (user && !authorizedOnly)) {
      return <Navigate to={redirectPage} replace />;
    }
  
    return children;
  }