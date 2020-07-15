export const GET_POSTS_ASYNC = 'GET_POSTS_ASYNC';

interface GetPostsAsync {
  type: typeof GET_POSTS_ASYNC
}


export type PostActionSagaTypes = GetPostsAsync;