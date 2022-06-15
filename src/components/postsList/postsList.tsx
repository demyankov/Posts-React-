import React from "react";
import Card from "./postsCard/card";
import postsData from "./data";

function PostsList(): any {
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
