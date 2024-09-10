import { IPostFields, IShortPost } from "src/interfaces";

export interface newPostState {
  postData: IPostFields,
  newBlockName: string | null,
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}

export interface adminState {
  isAdmin: boolean,
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}

export interface allPostsState {
  shortPosts: IShortPost[],
  isLoading: boolean,
  deletePostMessage: string | null,
  successMessage: string | null,
  errorMessage: string | null,
}