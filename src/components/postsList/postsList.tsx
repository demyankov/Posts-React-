import React from "react";
import { PostType } from "../../data/dataType";
import Card from "./postsCard/card";

function PostsList({postsData} : {postsData:PostType[]}){
  const card = postsData.map((post:PostType) => (
    <Card 
      url={post.image ? post.image : ""}
      cardTitle={post.title}
      cardText={post.text}
      cardDate={post.date}
      key={post.id}
    />
  ));
  return card;
}

export default PostsList;
