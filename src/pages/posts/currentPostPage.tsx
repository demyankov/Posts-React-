import { PostType } from "../../api/getPosts";
import {
  ImageWrapper,
  PostImage,
  PostText,
  PostTitle,
  Wrapper,
} from "./currentPostPageStyles";

function CurrentPostPage({ post }: { post: PostType }): JSX.Element {
  return (
    <Wrapper>
      <PostTitle>{post.title}</PostTitle>
      <ImageWrapper>
        <PostImage src={post.image} alt="About post" />
      </ImageWrapper>
      <PostText>{post.text}</PostText>
    </Wrapper>
  );
}

export default CurrentPostPage;
