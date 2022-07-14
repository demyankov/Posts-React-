const apiPath = `${process.env.REACT_APP_API_PATH}/blog/posts/`;

export interface PostType {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

export interface PostsResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<PostType>;
}

export async function getPosts({
  abortController,
  ...params
}: {
  abortController?: AbortController;
  authorId?: number;
  lessonNum?: number;
  limit?: number;
  offset?: number;
  ordering?: string;
  search?: string;
}): Promise<PostsResponse> {
  const querryParams = (Object.keys(params) as (keyof typeof params)[]).reduce(
    (acc, key) => {
      if (typeof params[key] !== "undefined") acc.append(key, `${params[key]}`);
      return acc;
    },
    new URLSearchParams()
  );

  const response = await fetch(`${apiPath}?${querryParams}`, {
    signal: abortController?.signal,
  });

  if (response.status === 200) {
    return (await response.json()) as PostsResponse;
  }

  return Promise.reject({
    status: response.status,
    errors: { global: response.statusText },
  });
}
