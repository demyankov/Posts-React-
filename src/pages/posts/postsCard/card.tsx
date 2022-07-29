
import { useParams } from "react-router-dom";
import { PostType } from "../../../api/getPosts";
import { CardDate, CardImage, CardImageWrapper, CardText, CardTitle, CardWrapper } from "./cardStyles";

function Card({post, url}: {post:PostType, url:string}): JSX.Element {

  const ad = useParams()
  console.log(ad)
    return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={post.image} alt="About post"/>      
      </CardImageWrapper>
      <CardTitle to = {`/${url}/${post.id}`}>{post.title}</CardTitle>
      {/* <CardText>{post.text}</CardText> */}
      <CardDate>{post.date}</CardDate>
    </CardWrapper>
  );
}

export default Card;

