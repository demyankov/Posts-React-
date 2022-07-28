import MainPage from "./pages/mainPage/mainPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Registration from "./pages/registration/registration";
import {Container } from "./AppStyles";
import PostsPage from "./pages/posts/postsPage";
import Information from "./pages/information/information";
import AppWrapper from "./components/appWrapper/appWrapper";
import MainLayout from "./components/mainLayout";
import { AppRoute } from "./enums/router";
import Success from "./pages/registration/registrationResult/success";
import NotFound from "./pages/notFound/notFound";
import RequestResertPassword from "./pages/registration/resertPassword/requestResertPassword";
import NewPassword from "./pages/registration/resertPassword/newPassword";
import { UserContextProvider} from "./components/Contexts/UserAuthorization/userContext";
import Login from "./pages/login/login";
import { AppThemeProvider } from "./components/Contexts/AppThemeProvider/AppThemeProvider";
import { InformationType } from "./pages/information/informationType";
import { PrivateRouter } from "./utils/privateRouter";
import AddPost from "./pages/addPost/addPost";

export function App({informationData}:{informationData: InformationType} ): JSX.Element {
   return (      
    <AppThemeProvider>
      <UserContextProvider>
        <AppWrapper>        
        <Container>   
          <BrowserRouter>  
            <Routes>        
              <Route path="/" element = {<MainLayout/>}> 
                <Route index element = {<MainPage/>}/>
                <Route path={AppRoute.Information} element = {<Information informationData = {informationData}/>}/>
                <Route path={AppRoute.Registration} element = {<PrivateRouter authorizedOnly={false} redirectPage={AppRoute.Main} ><Registration/></PrivateRouter>}/>
                <Route path={AppRoute.Login} element={<PrivateRouter authorizedOnly={false} redirectPage={AppRoute.Main} ><Login /></PrivateRouter>} />
                <Route path={`${AppRoute.Activate}/:uid/:token`} element={<PrivateRouter authorizedOnly={false} redirectPage={AppRoute.Main} ><Success /></PrivateRouter>} />
                <Route path={AppRoute.ResertPassword} element = {<RequestResertPassword/>}/> 
                <Route path={`${AppRoute.ResertPasswordConfirm}/:uid/:token`} element = {<NewPassword/>}/> 
                <Route path={AppRoute.PostsPage} element = {<PrivateRouter><PostsPage title = 'All posts'/></PrivateRouter>}/>
                <Route path={`${AppRoute.PostsPage}/:postId`} element = {<PrivateRouter><PostsPage title = 'Post' btnText = "Back" url = {AppRoute.PostsPage}/></PrivateRouter>}/>   
                <Route path={AppRoute.AddPost} element = {<PrivateRouter><AddPost></AddPost></PrivateRouter>}/>    
                <Route path={AppRoute.NotFound} element={<NotFound/>}/> 
                <Route path="*" element={<Navigate to={AppRoute.NotFound} replace/>}/>
              </Route>
            </Routes>
          </BrowserRouter>   
        </Container>
        </AppWrapper> 
      </UserContextProvider>    
      </AppThemeProvider>  
  );
}

export default App;
