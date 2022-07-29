import { AsyncLocalStorage } from 'async_hooks';
import { authorizedAxiosInstance } from './authorizedAxiosInstance';
import { PostType } from './getPosts';

const apiPath = `${process.env.REACT_APP_API_PATH}/blog/posts/my_posts/`;

export async function getMyPost ({signal}:{signal?:AbortController['signal']}): Promise<PostType[]> {

    const {data} = await authorizedAxiosInstance.get <PostType> (apiPath, {signal})

    return data as unknown as PostType[]
}
