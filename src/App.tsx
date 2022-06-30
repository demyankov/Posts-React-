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
import Confirmation from "./pages/registration/registrationResult/confirmation";
import PostsPage from "./pages/posts/postsPage";
import Information from "./pages/information/information";
import {useState } from "react";
import { themes} from "./components/AppThemeProvider/theme";
import { ThemeContext } from "./components/AppThemeProvider/ThemeContext";
import AppWrapper from "./components/appWrapper/appWrapper";
import MainLayout from "./components/mainLayout";
import { AppRoute } from "./enums/router";
import Sign_in from "./pages/signIn/signIn";
import Success from "./pages/signIn/success/success";
import NotFound from "./pages/notFound/notFound";


export function App({postsData, informationData}:{postsData:PostType[], informationData: InformationType} ): JSX.Element {
  
const [currentTheme, setCurrentTheme] : any = useState (themes.light)

const toggleTheme = ()=>{
  currentTheme === themes.light
  ?setCurrentTheme(themes.dark)
  :setCurrentTheme(themes.light)
}

  return (
    <ThemeContext.Provider value={{currentTheme,toggleTheme}}>
      <AppWrapper>
        <Container>   
          <BrowserRouter>  
            <Routes>        
              <Route path="/" element = {<MainLayout/>}> 
                <Route index element = {<MainPage/>}/>
                <Route path={AppRoute.Information} element = {<Information informationData = {informationData}/>}/>
                <Route path={AppRoute.Registration} element = {<Registration/>}/>
                <Route path={AppRoute.SignIn} element = {<Sign_in/>}/>
                <Route path={AppRoute.Confirmation} element = {<Confirmation/>}/> 
                <Route path={AppRoute.Success} element = {<Success/>}/> 
                <Route path={AppRoute.PostsPage} element = {<PostsPage postsData = {postsData} title = 'My posts'/>}/>
                <Route path={`${AppRoute.PostsPage}/:postId`} element = {<PostsPage postsData = {postsData} title = 'Post'/>}/>   
                <Route path={AppRoute.AddPost} element = {<div style = {{marginTop: '4rem'}}>Страница добавленя поста</div>}/>    
                <Route path={AppRoute.NotFound} element={<NotFound/>}/> 
                <Route path="*" element={<Navigate to={AppRoute.NotFound} replace/>}/>
              </Route>
            </Routes>
          </BrowserRouter>   
        </Container>
      </AppWrapper> 
      
    </ThemeContext.Provider>
  );
}

export default App;
