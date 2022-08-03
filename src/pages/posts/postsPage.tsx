import {
  SectionPostsHeader,
  SectionPosts,
  PostsListWrapper,
  PostsMain,
  PostsPromo,
} from "./postsPageStyle";
import Card from "./postsCard/card";
import Button from "../../components/button/button";
import { H2 } from "../../components/title/tittleStyles";
import { useNavigate, useParams } from "react-router-dom";
import { AppRoute } from "../../enums/router";
import { useEffect, useMemo, useState } from "react";
import { getPosts, PostType } from "../../api/getPosts";
import CurrentPostPage from "./currentPostPage";
import { getMyPost } from "../../api/getMyPosts";
import { P } from "../registration/registrationStyles";

const PostsPage = ({
  title,
  btnText = "Add",
  isMyPosts = false,
}: {
  title: string;
  isMyPosts?: boolean;
  btnText?: string;
  url?: string;
}): JSX.Element => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [errors, setErrors] = useState();
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();

    if (isMyPosts) {
      getMyPost(abortController)
        .then((data) => {
          data ? setPosts(data) : setPosts([]);
        })
        .catch((errors) => setErrors(errors));
    } else {
      getPosts({ abortController, limit: 4, offset: 25 })
        .then((response) => {
          setPosts(response.results);
        })
        .catch((errors) => setErrors(errors));
    }

    return () => {
      abortController.abort();
    };
  }, [isMyPosts]);

  const currentPost = useMemo(
    () =>
      posts?.filter((post: PostType) =>
        post?.id === Number(postId) ? post : null
      ),
    [postId]
  );

  return (
    <SectionPosts>
      <SectionPostsHeader>
        <H2>{title}</H2>
        {currentPost.length === 0 ? (
          <Button url={AppRoute.AddPost} maxWidth="6rem">
            {btnText}
          </Button>
        ) : (
          <Button click={() => navigate(-1)} maxWidth="6rem">
            {btnText}
          </Button>
        )}
      </SectionPostsHeader>
      <PostsListWrapper>
        {posts.length === 0 ? (
          <PostsMain>
            <P>You don't have any published posts</P>
          </PostsMain>
        ) : (
          <>
            <PostsMain>
              {currentPost.length === 0 ? (
                posts.map((post: PostType) => (
                  <Card post={post} key={post.id} />
                ))
              ) : (
                <CurrentPostPage post={currentPost[0]} />
              )}
            </PostsMain>
            <PostsPromo>
              {posts.map((post: PostType) => (
                <Card post={post} key={post.id} />
              ))}
            </PostsPromo>
          </>
        )}
      </PostsListWrapper>
    </SectionPosts>
  );
};

export default PostsPage;
