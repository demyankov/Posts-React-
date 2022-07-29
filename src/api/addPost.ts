
import { authorizedAxiosInstance } from './authorizedAxiosInstance';
import { PostType } from './getPosts';

const apiPath = `${process.env.REACT_APP_API_PATH}/blog/posts/`;

interface newPostRequestType {
    title: string,
    text: string,
    image: string,
    lesson_num: number,
}

export async function addPost (newPost: newPostRequestType): Promise<PostType> {

    const {data} = await authorizedAxiosInstance.post <PostType> (apiPath, newPost, {headers: {
        "content-Type": "multipart/form-data"
    }})
    
    return data as PostType
}