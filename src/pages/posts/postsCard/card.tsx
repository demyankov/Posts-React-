import { useLocation } from "react-router-dom";
import { PostType } from "../../../api/getPosts";
import {
  CardDate,
  CardImage,
  CardImageWrapper,
  CardTitle,
  CardWrapper,
} from "./cardStyles";

function Card({ post }: { post: PostType }): JSX.Element {
  const link = useLocation().pathname;

  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={post.image} alt="About post" />
      </CardImageWrapper>
      <CardTitle to={`${link}/${post.id}`}>{post.title}</CardTitle>
      <CardDate>{post.date}</CardDate>
    </CardWrapper>
  );
}

export default Card;
