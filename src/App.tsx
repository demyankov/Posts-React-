import React from "react";
import "./App.css";
import Confirmation from "./components/confirmation/confirmation";
import MainPageContent from "./components/content_wrapper/wrapper";
import Header from "./components/header/header";
<<<<<<< HEAD
import PostsList from "./components/postsList/postsList";
import Registration from "./components/registration/registration";
import classes from "./container.module.css";

function App(): JSX.Element {
  return (
    <div className={classes.container}>
      {/* ВРЕМЕННО ПОКА ВСЕ СТРАНИЦЫ ОДНА ЗА ОДНОЙ
     СОБЫТИЯ ЕЩЕ НЕ ОБРАБАТЫВАЛ */}
=======
import PostsPage from "./components/posts/postsPage";
import Registration from "./components/registration/registration";
import Success from "./components/success/success";
import classes from "./container.module.css";
import PostType from '../src/data/dataType'


function App({postsData}:{postsData:PostType[]}): JSX.Element {
  return (
  <div className="App">
    <div className={classes.container}>
      {/* ВРЕМЕННО ПОКА ВСЕ СТРАНИЦЫ ОДНА ЗА ОДНОЙ
     СОБЫТИЯ ЕЩЕ НЕ ОБРАБАТЫВАЛ */}      
      
>>>>>>> HW_39
      <Header />
      <MainPageContent />
      <Registration />
      <Confirmation />
<<<<<<< HEAD
      <div className="App">
        <div className="postsListWrapper">
          <PostsList />
        </div>
=======
      <Success />
      <PostsPage postsData = {postsData} title = 'My posts' isAllPosts/>
      <PostsPage postsData = {[postsData[1]]} title = 'Selected post'/>
>>>>>>> HW_39
      </div>
    </div>
  );
}

export default App;
