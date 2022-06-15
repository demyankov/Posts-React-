import React from "react";
import "./App.css";
import Confirmation from "./components/confirmation/confirmation";
import MainPageContent from "./components/content_wrapper/wrapper";
import Header from "./components/header/header";
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
      
      <Header />
      <MainPageContent />
      <Registration />
      <Confirmation />
      <Success />
      <PostsPage postsData = {postsData} title = 'My posts' isAllPosts/>
      <PostsPage postsData = {[postsData[1]]} title = 'Selected post'/>
      </div>
    </div>
  );
}

export default App;
