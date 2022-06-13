import React from "react";
import "./App.css";
import Confirmation from "./components/confirmation/confirmation";
import MainPageContent from "./components/content_wrapper/wrapper";
import Header from "./components/header/header";
import PostsList from "./components/postsList/postsList";
import Registration from "./components/registration/registration";
import classes from "./container.module.css";

function App(): JSX.Element {
  return (
    <div className={classes.container}>
      <Header />
      <MainPageContent />
      <Registration />
      <Confirmation />
      <div className="App">
        <div className="postsListWrapper">
          <PostsList />
        </div>
      </div>
    </div>
  );
}

export default App;
