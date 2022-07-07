import React from "react";
import Button from "../../components/button/button";
import { AppRoute } from "../../enums/router";
import { Content, Wrapper, MainTitle} from "./mainPageStyles";

function MainPage():JSX.Element {
  return (
    <Wrapper>
      <MainTitle>Make your Blog <span>Online</span></MainTitle>
      <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ...</Content>
      <Button url = {AppRoute.Information} maxWidth = '15rem'> Learn More </Button>      
    </Wrapper>
  );
}

export default MainPage;
