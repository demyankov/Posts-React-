import MainPage from "./pages/mainPage/mainPage";
import Header from "./components/header/header";
import Registration from "./pages/registration/registration";
import {PostType, InformationType} from '../src/data/dataType'
import Success from "./pages/registration/success/success";
import {ThemeProvider} from "@emotion/react";
import { AppWrapper, Container } from "./AppStyles";
import Confirmation from "./pages/registration/registrationResult/confirmation";
import PostsPage from "./pages/posts/postsPage";
import Information from "./pages/information/information";

const theme = {
  bgcolor: {
    active: 'blue',
    disactive: 'white',
  }
}

function App({postsData, informationData}:{postsData:PostType[], informationData: InformationType} ): JSX.Element {
  
  return (
  <AppWrapper>
    <Container>          
      <Header />
      <MainPage/>
      <Registration />
      <Confirmation/>
      <Success />
      <PostsPage postsData = {postsData} title = 'My posts' isAllPosts/>
      <PostsPage postsData = {[postsData[1]]} title = 'Selected post'/>
      {/* <ThemeProvider> */}
        <Information informationData = {informationData}/>
      {/* </ThemeProvider> */}
      </Container>
    </AppWrapper>
  );
}

export default App;
