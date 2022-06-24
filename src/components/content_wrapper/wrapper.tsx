import React from "react";
import Button from "../template/button/button";
import Content from "./content/content";
import ContentHeader from "./content_header/header";
import { Wrapper } from "./wrapperStyles";

function MainPageContent() {
  return (
    <Wrapper>
      <ContentHeader />
      <Content text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ..." />
      <Button buttonText="Learn More" maxWidth = '15rem'/>
    </Wrapper>
  );
}

export default MainPageContent;
