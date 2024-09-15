import { NewBlockNames, NewBlockTables } from "src/components";
import { IFullPost, IShortPost, IShortPostFile } from "src/interfaces";

export interface newPostState {
  postData: IFullPost,
  newBlock: {
    newBlockName: NewBlockNames | null,
    newBlockTable: NewBlockTables | null,
  },
  update: {
    updateName: NewBlockNames | null,
    updateTable: NewBlockTables | null,
    updateBlockNumber: number | null,
  },
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
  shortPosts: IShortPostFile[],
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}