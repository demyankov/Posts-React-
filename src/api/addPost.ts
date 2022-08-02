import { authorizedAxiosInstance } from "./authorizedAxiosInstance";
import { PostType } from "./getPosts";

const apiPath = `${process.env.REACT_APP_API_PATH}/blog/posts/`;

interface newPostRequestType {
  title: string;
  text: string;
  image?: File;
  lesson_num: number;
}

export async function addPost(newPost: newPostRequestType): Promise<PostType> {
  const postData = new FormData();
  postData.append("title", newPost.title);
  postData.append("text", newPost.text);
  postData.append("image", newPost.image || "");
  postData.append("lesson_num", `${newPost.lesson_num}`);

  const { data } = await authorizedAxiosInstance.post<PostType>(
    apiPath,
    postData,
    {
      headers: {
        "content-Type": "multipart/form-data",
      },
    }
  );

  return data as PostType;
}
