import MainPageContent from "./components/content_wrapper/wrapper";
import Header from "./components/header/header";
import PostsPage from "./components/posts/postsPage";
import Registration from "./components/registration/registration";
import {PostType, InformationType} from '../src/data/dataType'
import Confirmation from "./components/registration/confirmation/confirmation";
import Success from "./components/registration/success/success";
import Information from "./components/information/information";
import {ThemeProvider} from "@emotion/react";
import { AppWrapper, Container } from "./AppStyles";

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
      <MainPageContent />
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
