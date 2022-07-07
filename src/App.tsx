import MainPage from "./pages/mainPage/mainPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Registration from "./pages/registration/registration";
import {PostType, InformationType} from '../src/data/dataType'
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
import { UserContextProvider } from "./components/Contexts/UserAuthorization/userContext";
import Login from "./pages/login/login";
import { AppThemeProvider } from "./components/Contexts/AppThemeProvider/AppThemeProvider";

export function App({postsData, informationData}:{postsData:PostType[], informationData: InformationType} ): JSX.Element {
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
                <Route path={AppRoute.Registration} element = {<Registration/>}/>
                <Route path={AppRoute.Login} element = {<Login/>}/>
                <Route path={`${AppRoute.Activate}/:uid/:token`} element = {<Success/>}/> 
                <Route path={AppRoute.ResertPassword} element = {<RequestResertPassword/>}/> 
                <Route path={`${AppRoute.ResertPasswordConfirm}/:uid/:token`} element = {<NewPassword/>}/> 
                <Route path={AppRoute.PostsPage} element = {<PostsPage postsData = {postsData} title = 'My posts'/>}/>
                <Route path={`${AppRoute.PostsPage}/:postId`} element = {<PostsPage postsData = {postsData} title = 'Post'/>}/>   
                <Route path={AppRoute.AddPost} element = {<div style = {{marginTop: '4rem'}}>Страница добавления поста</div>}/>    
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
