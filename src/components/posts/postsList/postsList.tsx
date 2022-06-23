import React from "react";
import Card from "./postsCard/card";
import {PostType} from "../../../data/dataType";

function PostsList({postsData}:{postsData:PostType[]}): any {
  const card = postsData.map((post) => (
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
