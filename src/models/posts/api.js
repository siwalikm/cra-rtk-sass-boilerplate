import { API } from "../BaseAPI";

const todosAPI = API.injectEndpoints({
  endpoints: (builder) => {
    return {
      getPosts: builder.query({
        query: () => "/posts"
      }),
      getPostById: builder.query({
        query: ({ id }) => `/posts/${id}`
      })
    };
  }
});

export const { useGetPostsQuery, useGetPostByIdQuery } = todosAPI;
