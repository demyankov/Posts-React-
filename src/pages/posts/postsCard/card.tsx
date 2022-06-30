import { PostType } from "../../../data/dataType";
import { CardDate, CardImage, CardImageWrapper, CardText, CardTitle, CardWrapper } from "./cardStyles";

function Card({post}: {post:PostType}): JSX.Element {
    return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={post.image} alt="About post"/>      
      </CardImageWrapper>
      <CardTitle to = {`/posts/${post.id}`}>{post.title}</CardTitle>
      <CardText>{post.text}</CardText>
      <CardDate>{post.date}</CardDate>
    </CardWrapper>
  );
}

export default Card;

