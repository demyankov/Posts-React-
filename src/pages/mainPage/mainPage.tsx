import React from "react";
import Button from "../../components/button/button";
import { Content, Wrapper, MainTitle } from "./mainPageStyles";




function MainPage() {
  return (
    <Wrapper>
      <MainTitle>Make your Blog <span>Online</span></MainTitle>
      <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ...</Content>
      <Button buttonText="Learn More" maxWidth = '15rem'/>      
    </Wrapper>
  );
}

export default MainPage;
