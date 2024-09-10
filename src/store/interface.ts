import { NewBlockNames, NewBlockTables } from "src/components";
import { IFullPost, IShortPost } from "src/interfaces";

export interface newPostState {
  postData: IFullPost,
  newBlockName: NewBlockNames | null,
  newBlockTable: NewBlockTables | null,
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
  successMessage: string | null,
  errorMessage: string | null,
}