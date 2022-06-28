import MainPage from "./pages/mainPage/mainPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Registration from "./pages/registration/registration";
import {PostType, InformationType} from '../src/data/dataType'
import Success from "./pages/registration/success/success";
import {Container } from "./AppStyles";
import Confirmation from "./pages/registration/registrationResult/confirmation";
import PostsPage from "./pages/posts/postsPage";
import Information from "./pages/information/information";
import {useState } from "react";
import { themes} from "./components/AppThemeProvider/theme";
import { ThemeContext } from "./components/AppThemeProvider/ThemeContext";
import AppWrapper from "./components/appWrapper/appWrapper";
import MainLayout from "./components/mainLayout";


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
                <Route path="/" element = {<MainPage/>}>
                  {/* <Route path="information" element = {<Information/>}/> */}
                </Route>  
                <Route path="registration" element = {<Registration/>}/>
                <Route path="confirmation" element = {<Confirmation/>}/> 
                <Route path="success" element = {<Success/>}/> 
                <Route path="posts" element = {<PostsPage postsData = {postsData} title = 'My posts' isAllPosts/>}/>                   
                {/* <PostsPage postsData = {[postsData[1]]} title = 'Selected post'/> */}
                <Route path="information" element = {<Information informationData = {informationData}/>}/>
             </Route>
            </Routes>
          </BrowserRouter>   
        </Container>
      </AppWrapper> 
      
    </ThemeContext.Provider>
   
   
  );
}

export default App;
